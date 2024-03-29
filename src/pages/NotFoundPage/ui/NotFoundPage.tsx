import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'

import style from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(style.notFoundPage, {}, [className])}>
      {t('notFoundPage')}
    </div>
  )
}