'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, Translations } from './types'
import { en } from './en'
import { uk } from './uk'

const translations: Record<Locale, Translations> = { en, uk }

// Map of country codes to locales (Ukrainian-speaking regions)
const countryToLocale: Record<string, Locale> = {
  UA: 'uk', // Ukraine
}

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Cookie name for storing user's language preference
const LOCALE_COOKIE = 'lyvena_locale'

// Get cookie value
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
  return undefined
}

// Set cookie value
function setCookie(name: string, value: string, days: number = 365) {
  if (typeof document === 'undefined') return
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`
}

// Detect locale from browser's Accept-Language or navigator.language
function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  
  // Check navigator.languages (preferred languages array)
  const languages = navigator.languages || [navigator.language]
  
  for (const lang of languages) {
    const langCode = lang.toLowerCase().split('-')[0]
    if (langCode === 'uk') return 'uk'
  }
  
  return 'en'
}

interface I18nProviderProps {
  children: ReactNode
  initialLocale?: Locale
  detectedCountry?: string
}

export function I18nProvider({ children, initialLocale, detectedCountry }: I18nProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [locale, setLocaleState] = useState<Locale>(initialLocale || 'en')

  useEffect(() => {
    // Priority: 1. Cookie preference, 2. Server-detected country, 3. Browser language, 4. Default (en)
    const savedLocale = getCookie(LOCALE_COOKIE) as Locale | undefined
    
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'uk')) {
      setLocaleState(savedLocale)
    } else if (detectedCountry && countryToLocale[detectedCountry]) {
      setLocaleState(countryToLocale[detectedCountry])
    } else {
      const browserLocale = detectBrowserLocale()
      setLocaleState(browserLocale)
    }
    
    setIsLoading(false)
  }, [detectedCountry])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    setCookie(LOCALE_COOKIE, newLocale)
    // Update html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale
    }
  }

  // Update html lang on locale change
  useEffect(() => {
    if (typeof document !== 'undefined' && !isLoading) {
      document.documentElement.lang = locale
    }
  }, [locale, isLoading])

  const value: I18nContextType = {
    locale,
    t: translations[locale],
    setLocale,
    isLoading,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export function useTranslations() {
  const { t } = useI18n()
  return t
}

export function useLocale() {
  const { locale, setLocale } = useI18n()
  return { locale, setLocale }
}
