import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import style from './Button.module.scss'

type ButtonVariant = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  children: ReactNode
}

export const Button = ({
  className,
  children,
  variant = 'clear',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(style.button, {}, [style[variant], className])}
      {...rest}
    >
      {children}
    </button>
  )
}