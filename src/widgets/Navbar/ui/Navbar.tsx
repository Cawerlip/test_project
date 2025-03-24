import { classNames } from 'shared/lib/classNames/classNames'

import style from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen(prev => !prev)
  }, [])

  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <Button
        variant='clear'
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsam amet deleniti non praesentium, officiis itaque sit officia velit unde illum eos ab quos porro quisquam incidunt neque laborum reprehenderit?
      </Modal>
    </div >
  )
}