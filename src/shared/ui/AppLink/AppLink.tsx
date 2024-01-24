import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import style from './AppLink.module.scss'

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  variant?: AppLinkVariant,
}

export const AppLink = ({
  to,
  children,
  className,
  variant = AppLinkVariant.PRIMARY,
  ...rest
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(style.appLink, {}, [style[variant], className])}
      {...rest}
    >
      {children}
    </Link>
  )
}