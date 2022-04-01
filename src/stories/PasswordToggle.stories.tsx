import { Story } from '@storybook/react';
import PasswordToggle from '../components/PasswordToggle';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/PasswordToggle',
  component: PasswordToggle,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#0A1929">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicPasswordToggle: Story = () => <PasswordToggle />;
