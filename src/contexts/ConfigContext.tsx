import React, { createContext, useContext } from 'react'

type AppConfig = any

const ConfigContext = createContext<AppConfig | null>(null)

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const config = (window as any).APP_CONFIG
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}

export const useConfig = (): AppConfig => {
  const ctx = useContext(ConfigContext)
  if (ctx === null) {
    throw new Error('useConfig 必须在 ConfigProvider 内部使用')
  }
  return ctx
}