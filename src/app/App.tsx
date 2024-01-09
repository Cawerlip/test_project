import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"

import { MainPageAsync } from "pages/MainPage"
import { AboutPageAsync } from "pages/AboutPage"

import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/providers/ThemeProvider"

import './styles/index.scss'

export const App = () => {
const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<MainPageAsync />}/>
            <Route path="/about" element={<AboutPageAsync />}/>
        </Routes>
     </Suspense>
    </div>
  )
}