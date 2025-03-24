import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: any) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur facere recusandae ex maxime vero id labore dolor molestiae! Architecto nesciunt cupiditate dolor corporis aperiam eaque repellat iusto repudiandae. Optio?',
  isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur facere recusandae ex maxime vero id labore dolor molestiae! Architecto nesciunt cupiditate dolor corporis aperiam eaque repellat iusto repudiandae. Optio?',
  isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
