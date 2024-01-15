import { useState } from "react"
import { classNames } from "shared/lib/classNames"

import style from './Sidebar.module.scss'
import { LangSwitcher, ThemeSwitcher } from "shared/ui"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}:SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(style.sidebar, {[style.collapsed]: collapsed}, [className])}>
      <button onClick={toggleSidebar}>toggle</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}