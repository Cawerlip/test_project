import { useState } from "react"
import style from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(c => c + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className={style.btn} onClick={increment}>inc</button>
    </>
  )
} 