'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale, isValidLocale } from '@/lib/i18n'
import zhMessages from '@/messages/zh.json'
import enMessages from '@/messages/en.json'

type Messages = typeof zhMessages

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const messages: Record<Locale, Messages> = {
  zh: zhMessages,
  en: enMessages
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Get nested value from object using dot notation
  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, key) => current?.[key], obj) || path
  }

  const t = (key: string): string => {
    return getNestedValue(messages[locale], key)
  }

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    // Update URL
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(/^\/(zh|en)/, `/${newLocale}`)
    window.history.pushState({}, '', newPath)
  }

  useEffect(() => {
    // Get locale from URL or localStorage
    const pathLocale = window.location.pathname.split('/')[1]
    const savedLocale = localStorage.getItem('locale')
    
    if (isValidLocale(pathLocale)) {
      setLocaleState(pathLocale)
    } else if (savedLocale && isValidLocale(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
