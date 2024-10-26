import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import Theme from '../../assets/icons/Theme.svg'

import style from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme()

  return (
    <Button
      variant='clear'
      className={classNames(style.switcher, {}, [className])}
      onClick={toggleTheme}
    >
      {<Theme className={style.icon} />}
    </Button>
  )
}