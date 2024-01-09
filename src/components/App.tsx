import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"

import { MainPageAsync } from "../pages/MainPage/MainPage.async"
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async"
import { useTheme } from "../theme/useTheme"

import '../styles/index.scss'
import { classNames } from "./helpers/classNames/classNames"

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