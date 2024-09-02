import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const BugButton = () => {
  const [error, setError] = useState<boolean>(false)
  const { t } = useTranslation()

  const onThrowError = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={onThrowError}
    >
      {t('throw error')}
    </Button>
  )
}