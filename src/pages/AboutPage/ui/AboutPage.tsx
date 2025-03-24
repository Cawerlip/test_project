import { useTranslation } from 'react-i18next'
import style from './AboutPage.module.scss'

export const AboutPage = () => {
  const { t } = useTranslation('about')

  return (
    <div className={style.aboutPage}>{t('aboutPage')}</div>
  )
}
