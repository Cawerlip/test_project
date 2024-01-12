import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames"
import LightIcon from '../../assets/icons/themeLight.svg'
import DarkIcon from '../../assets/icons/themeDark.svg'
import { Button, ButtonVariant } from "../Button/Button"

import style from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
const { theme, toggleTheme } = useTheme()

  return (
    <Button 
      variant={ButtonVariant.CLEAR}
      className={classNames(style.switcher, {}, [className])}
      onClick={toggleTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}