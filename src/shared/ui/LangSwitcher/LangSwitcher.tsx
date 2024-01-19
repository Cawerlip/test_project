import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { classNames } from 'shared/lib/classNames'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation()

  const text = i18n.language === 'ru' ? 'english' : 'русский'

  const onTranslate = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      variant="clear"
      onClick={onTranslate}
      className={classNames('', {}, [className])}
    >
      {text}
    </Button>
  )
}