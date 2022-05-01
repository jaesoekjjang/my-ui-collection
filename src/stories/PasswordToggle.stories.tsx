import { Story } from '@storybook/react';
import Toggle from '../components/PasswordToggle';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Password',
  component: Toggle,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#0A1929">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const PasswordToggle: Story = () => <Toggle />;
