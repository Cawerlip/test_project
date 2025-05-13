import { classNames } from 'shared/lib'
import style from './Modal.module.scss'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
// import { Portal } from '../Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
    [style.opened]: isOpen,
    [style.closing]: isClosing,
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    // <Portal>
    <div className={classNames(style.modal, mods, [className])}>
      <div className={style.overlay} onClick={closeHandler}>
        <div className={style.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
    // </Portal>
  )
}
