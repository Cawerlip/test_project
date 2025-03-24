import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const onTranslate = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')

  console.log(i18n.language)

  return (
    <Button
      variant="clear"
      onClick={onTranslate}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  )
}