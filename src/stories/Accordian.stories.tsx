import {Story} from '@storybook/react'
import Accordian from '../components/Accordian'

export default {
  title: 'Components/Accordian',
  component: Accordian,
}

const Template:Story = (args) => <Accordian {...args} />

export const BasicAccordian = Template.bind({});