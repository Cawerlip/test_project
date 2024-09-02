import { ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import style from './Button.module.scss'

type ButtonVariant = 'clear' | 'outline' | 'background' | 'backgroundInverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  children: ReactNode
}

export const Button = ({
  className,
  children,
  square = false,
  variant = 'clear',
  size = 'm',
  ...rest
}: ButtonProps) => {

  const mods: Record<string, boolean> = {
    [style.square]: square,
    [style.sizeM]: size === 'm',
    [style.sizeL]: size === 'l',
    [style.sizeXL]: size === 'xl',
  }

  return (
    <button
      type="button"
      className={classNames(style.button, mods, [style[variant], className])}
      {...rest}
    >
      {children}
    </button>
  )
}