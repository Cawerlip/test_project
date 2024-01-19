import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import 'shared/config/i18n/i18n'

import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='container'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}