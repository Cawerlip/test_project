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
  // theme: ThemeButton.OUTLINE,
}

// export const OutlineDark = Template.bind({})
// OutlineDark.args = {
//   children: 'Text',
//   theme: ThemeButton.OUTLINE,
// }
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
