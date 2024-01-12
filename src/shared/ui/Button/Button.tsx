import { ButtonHTMLAttributes } from "react"
import { classNames } from "shared/lib/classNames"
import style from './Button.module.scss'

export enum ButtonVariant {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant: ButtonVariant
  children: React.ReactNode
}

export const Button = ({
  className,
  children,
  variant,
  ...rest
}:ButtonProps) => {
  return (
    <button 
      className={classNames(style.button, {}, [style[variant], className])}
      {...rest}
    >
      {children}
    </button>
  )
}