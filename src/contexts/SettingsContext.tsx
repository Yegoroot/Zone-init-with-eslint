/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useEffect } from 'react'
// hooks
import { useLocales, useLocalStorage } from '../hooks'
// utils
import getColorPresets, { colorPresets } from '../utils/getColorPresets'
// config
import { defaultSettings } from '../config'
// @type
import { SettingsContextProps } from '../@types/settings'

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onToggleDirection: () => {},
  onChangeColorPresets: () => {},
  onResetSetting: () => {},
  setColor: colorPresets[0],
  colorOption: [],
}

const SettingsContext = createContext(initialState)

type Props = {
  children: ReactNode;
};

function SettingsProvider({ children }: Props) {
  const { currentLang } = useLocales()
  const [settings, setSettings] = useLocalStorage('settings', {
    ...defaultSettings,
  })

  useEffect(() => {
    if (currentLang === 'ar') {
      setSettings({
        ...settings,
        themeDirection: 'rtl',
      })
    } else {
      setSettings({
        ...settings,
        themeDirection: 'ltr',
      })
    }
  }, [currentLang])

  console.log(currentLang, settings)

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    })
  }

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === 'ltr' ? 'rtl' : 'ltr',
    })
  }

  // FIXME SAVE IN ANOTHER LOCAL STORAGE
  const onChangeColorPresets = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: (event.target as HTMLInputElement).value,
    })
  }

  const onResetSetting = () => {
    setSettings({
      ...defaultSettings,
    })
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onToggleMode,

        // Direction
        onToggleDirection,

        // Color Presets
        onChangeColorPresets,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          primary: color.primary.main,
          secondary: color.secondary.main,
        })),

        // Reset Setting
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsProvider, SettingsContext }
