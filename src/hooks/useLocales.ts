// next
import { useRouter } from 'next/router';
// @mui
import { enUS, deDE, frFR } from '@mui/material/locale';
//
import { EN, FR, DE } from '../locales';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    manualValue: EN,
    icon: '/static/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'German',
    value: 'de',
    systemValue: deDE,
    manualValue: DE,
    icon: '/static/icons/flags/ic_flag_de.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: frFR,
    manualValue: FR,
    icon: '/static/icons/flags/ic_flag_fr.svg',
  },
] as const;

export default function useLocales() {
  const { pathname, asPath, locale, push } = useRouter();

  const onChangeLanguage = (lang: 'en' | 'de' | 'fr') => {
    push(pathname, asPath, { locale: lang, scroll: false });
  };

  return {
    trans: LANGS.find((lang) => lang.value === locale)?.manualValue,
    currentLang: locale,
    allLang: LANGS,
    onChangeLanguage,
  };
}
