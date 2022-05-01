import { Story } from '@storybook/react';
import Toast from '../components/Toast';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Toast',
  component: Toast,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#434253">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const AutoClose: Story = () => <Toast />;
