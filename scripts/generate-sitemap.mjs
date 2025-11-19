#!/usr/bin/env node
/**
 * Generate sitemap.xml and robots.txt into ./dist for a specific site.
 *
 * Inputs (env):
 * - SITE_URL (required): Base URL of the site, e.g. https://example.com
 * - strapi_url (optional): Strapi API base URL. If missing, try remote/local config.json.
 * - strapi_site_slug (optional): Current site slug in Strapi. If missing, try remote/local config.json.
 * - STRAPI_API_TOKEN (optional): Strapi token to access private content.
 *
 * Fallback config resolution:
 * - Try `GET ${SITE_URL}/config.json`
 * - Fallback to local `public/config.json`
 *
 * It paginates /api/blog-posts filtered by site slug to build dynamic URLs `/blog/:slug`.
 */

import fs from 'fs/promises'
import path from 'path'

function ensureSiteUrl(u) {
  if (!u || typeof u !== 'string') throw new Error('SITE_URL 环境变量是必需的')
  // Normalize: trim spaces, ensure protocol
  let url = u.trim()
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }
  // Remove trailing slash
  return url.replace(/\/$/, '')
}

function joinUrl(base, p) {
  // p is like '/about' or 'sitemap.xml'
  return new URL(p, base + '/').toString()
}

async function readJSON(filePath) {
  const txt = await fs.readFile(filePath, 'utf8')
  return JSON.parse(txt)
}

async function fetchJson(url, headers = {}) {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`请求失败 ${res.status}: ${url}`)
  return res.json()
}

function pickStrapiFromConfig(cfg) {
  const url = cfg?.apiEndpoints?.strapi_url ?? cfg?.strapi_url ?? ''
  const slug = cfg?.apiEndpoints?.strapi_site_slug ?? cfg?.strapi_site_slug ?? ''
  return { url, slug }
}

async function resolveStrapiConfig(siteUrl) {
  const envUrl = process.env.strapi_url || process.env.STRAPI_URL || ''
  const envSlug = process.env.strapi_site_slug || process.env.STRAPI_SITE_SLUG || ''
  if (envUrl && envSlug) {
    return { strapiUrl: envUrl, siteSlug: envSlug }
  }

  // Try remote config.json
  try {
    const remoteCfgUrl = joinUrl(siteUrl, '/config.json')
    const remoteCfg = await fetchJson(remoteCfgUrl)
    const picked = pickStrapiFromConfig(remoteCfg)
    if (picked.url && picked.slug) {
      return { strapiUrl: picked.url, siteSlug: picked.slug }
    }
  } catch (e) {
    // ignore and fallback
  }

  // Fallback to local public/config.json
  try {
    const localCfg = await readJSON(path.resolve('public/config.json'))
    const picked = pickStrapiFromConfig(localCfg)
    if (picked.url && picked.slug) {
      return { strapiUrl: picked.url, siteSlug: picked.slug }
    }
  } catch (e) {
    // ignore
  }

  // Final fallback to defaults used in frontend runtime
  return { strapiUrl: 'https://2amcreations.com', siteSlug: 'xmyxyswkj' }
}

function normalizeAttr(item, key) {
  return (item?.attributes && item.attributes[key]) ?? item?.[key] ?? null
}

async function fetchAllBlogPosts(strapiUrl, siteSlug, token) {
  const pageSize = 100
  let page = 1
  const posts = []
  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  while (true) {
    const q = new URL('/api/blog-posts', strapiUrl)
    q.searchParams.set('filters[site][slug][$eq]', siteSlug)
    q.searchParams.set('pagination[page]', String(page))
    q.searchParams.set('pagination[pageSize]', String(pageSize))
    q.searchParams.append('fields[0]', 'slug')
    q.searchParams.append('fields[1]', 'updatedAt')
    q.searchParams.append('fields[2]', 'publishedAt')

    const json = await fetchJson(q.toString(), headers)
    const data = Array.isArray(json.data) ? json.data : []
    for (const item of data) {
      const slug = normalizeAttr(item, 'slug')
      const updatedAt = normalizeAttr(item, 'updatedAt') || normalizeAttr(item, 'publishedAt') || new Date().toISOString()
      if (slug) posts.push({ slug, updatedAt })
    }
    const pageCount = json?.meta?.pagination?.pageCount ?? 1
    if (page >= pageCount) break
    page += 1
  }
  return posts
}

function buildSitemapXml(siteUrl, staticPaths, dynamicPosts) {
  const urls = []
  const now = new Date().toISOString()
  for (const p of staticPaths) {
    urls.push({ loc: joinUrl(siteUrl, p), lastmod: now, changefreq: 'daily', priority: '0.7' })
  }
  for (const post of dynamicPosts) {
    urls.push({ loc: joinUrl(siteUrl, `/blog/${post.slug}`), lastmod: post.updatedAt, changefreq: 'weekly', priority: '0.8' })
  }
  const body = urls
    .map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

function buildRobotsTxt(siteUrl) {
  const sitemapUrl = joinUrl(siteUrl, '/sitemap.xml')
  return `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`
}

async function main() {
  const siteUrl = ensureSiteUrl(process.env.SITE_URL)
  const { strapiUrl, siteSlug } = await resolveStrapiConfig(siteUrl)
  const token = process.env.STRAPI_API_TOKEN || ''

  const staticPaths = ['/', '/articles', '/videos', '/about', '/blog']
  const posts = await fetchAllBlogPosts(strapiUrl, siteSlug, token)

  const sitemapXml = buildSitemapXml(siteUrl, staticPaths, posts)
  const robotsTxt = buildRobotsTxt(siteUrl)

  const distDir = path.resolve('dist')
  try { await fs.mkdir(distDir, { recursive: true }) } catch {}
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8')
  await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8')

  console.log(`✅ Generated sitemap.xml and robots.txt for ${siteUrl}`)
}

main().catch((err) => {
  console.error('❌ 生成站点地图失败:', err)
  process.exit(1)
})