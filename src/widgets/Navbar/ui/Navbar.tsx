import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui'

import style from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <div className={classNames(style.links)}>
        <AppLink
          to={'/'}
          variant={AppLinkVariant.SECONDARY}
        >
          {t('mainPage')}
        </AppLink>
        <AppLink
          to={'/about'}
          variant={AppLinkVariant.SECONDARY}
        >
          {t('aboutPage')}
        </AppLink>
      </div>
    </div>
  )
}