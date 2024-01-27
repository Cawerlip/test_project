import { useEffect, useState } from "react"

export const BugButton = () => {
  const [error, setError] = useState<boolean>(false)

  const onThrowError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <button onClick={onThrowError} type="button">throw error</button>
  )
}