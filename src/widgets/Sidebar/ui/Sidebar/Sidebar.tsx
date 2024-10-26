import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import style from './Sidebar.module.scss'
import { LangSwitcher, ThemeSwitcher, Button, AppLink } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/Home.svg'
import InfoIcon from 'shared/assets/icons/Info.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { t } = useTranslation()
  // test
  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div
      data-testid='sidebar'
      className={classNames(
        style.sidebar,
        { [style.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={classNames(style.links)}>
        <AppLink
          className={classNames(style.iconLink)}
          to={RoutePath.main}
          variant={AppLinkVariant.SECONDARY}
        >
          <HomeIcon className={style.icon} />
          <span className={style.link}>
            {t('mainPage')}
          </span>
        </AppLink>
        <AppLink
          className={classNames(style.iconLink)}
          to={RoutePath.about}
          variant={AppLinkVariant.SECONDARY}
        >
          <InfoIcon className={style.icon} />
          <span className={classNames(style.link)}>
            {t('aboutPage')}
          </span>
        </AppLink>
      </div>
      <div className={style.switchers}>
        <Button
          data-testid='sidebar-toggle'
          onClick={toggleSidebar}
          className={style.collapsedBtn}
          variant='backgroundInverted'
          square
        >
          {collapsed ? '>' : '<'}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  )
}