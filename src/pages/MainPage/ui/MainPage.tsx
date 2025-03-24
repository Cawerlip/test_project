import { useTranslation } from 'react-i18next'
import style from './MainPage.module.scss'

export const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div className={style.mainPage}>{t('mainPage')}</div>
  )
}
