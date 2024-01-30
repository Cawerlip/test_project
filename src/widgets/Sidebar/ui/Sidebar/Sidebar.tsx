import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import style from './Sidebar.module.scss'
import { LangSwitcher, ThemeSwitcher, Button } from 'shared/ui'
import React from 'react'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

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
      <Button
        data-testid='sidebar-toggle'
        onClick={toggleSidebar}
      >
        toggle
      </Button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}