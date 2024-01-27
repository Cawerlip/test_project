import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

import style from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation()

  const onReload = () => {
    window.location.reload()
  }

  return (
    <div className={style.pageError}>
      <p>{t('throwError')}</p>
      <Button onClick={onReload} variant='clear'>{t('reload')}</Button>
    </div >
  )
}