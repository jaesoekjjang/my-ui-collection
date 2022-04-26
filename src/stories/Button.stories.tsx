import { Story } from '@storybook/react';
import Button from '../components/Button';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story: Story) => (
      <StoryLayout>
        <Story />
      </StoryLayout>
    ),
  ],
};

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  size: 'sm',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  size: 'md',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
  size: 'lg',
};
