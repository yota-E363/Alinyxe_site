import type { Dictionary, Locale } from '@/lib/i18n/types'
import { fr } from './fr'
import { en } from './en'

export const dictionaries: Record<Locale, Dictionary> = { fr, en }

export const locales: Locale[] = ['fr', 'en']
export const defaultLocale: Locale = 'fr'

export type { Dictionary, Locale }
