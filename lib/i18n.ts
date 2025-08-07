export type Locale = 'zh' | 'en'

export const locales: Locale[] = ['zh', 'en']
export const defaultLocale: Locale = 'zh'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
