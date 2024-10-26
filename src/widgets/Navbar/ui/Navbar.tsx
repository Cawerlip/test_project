import { classNames } from 'shared/lib/classNames/classNames'

import style from './Navbar.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      {RoutePath.main}
    </div>
  )
}