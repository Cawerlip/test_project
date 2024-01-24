import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui'

import style from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={classNames(style.links)}>
        <AppLink
          to={'/'}
          variant={AppLinkVariant.SECONDARY}
        >
          Main Page
        </AppLink>
        <AppLink
          to={'/about'}
          variant={AppLinkVariant.SECONDARY}
        >
          About Page
        </AppLink>
      </div>
    </div>
  )
}