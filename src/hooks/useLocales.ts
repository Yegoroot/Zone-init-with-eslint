// next
import { useRouter } from 'next/router'
// @mui
import { enUS, ruRU, arEG } from '@mui/material/locale'
//
import { ar, ru, en } from '../locales/index'

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'Arabic',
    value: 'ar',
    systemValue: arEG,
    manualValue: ar,
    icon: '/static/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'Russian',
    value: 'ru',
    systemValue: ruRU,
    manualValue: ru,
    icon: '/static/icons/flags/ic_flag_de.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    manualValue: en,
    icon: '/static/icons/flags/ic_flag_fr.svg',
  },
] as const

export default function useLocales() {
  const { pathname, asPath, locale, push } = useRouter()

  const onChangeLanguage = (lang: 'ru' | 'ar' | 'en') => {
    push(pathname, asPath, { locale: lang, scroll: false })
  }

  return {
    trans: LANGS.find((lang) => lang.value === locale)?.manualValue,
    currentLang: locale,
    allLang: LANGS,
    onChangeLanguage,
  }
}
