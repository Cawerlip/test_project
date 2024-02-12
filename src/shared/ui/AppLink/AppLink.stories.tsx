import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'app link',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'app link',
}

Secondary.decorators = [ThemeDecorator(Theme.DARK)]