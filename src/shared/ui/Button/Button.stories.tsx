import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

Primary.decorators = [ThemeDecorator(Theme.DARK)]


export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  variant: 'clear',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  variant: 'outline',
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'l'
}
export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'Text',
  variant: 'outline',
  size: 'xl'
}
export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  variant: 'background',
}
export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'Text',
  variant: 'backgroundInverted',
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  variant: 'outline',
  square: true,
}

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
  children: '>',
  variant: 'outline',
  square: true,
  size: 'm',
}
export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  variant: 'outline',
  square: true,
  size: 'l',
}
export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  variant: 'outline',
  square: true,
  size: 'xl',
}


// export const OutlineDark = Template.bind({})
// OutlineDark.args = {
//   children: 'Text',
//   theme: ThemeButton.OUTLINE,
// }
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
