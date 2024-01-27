import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui'

import style from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(style.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}