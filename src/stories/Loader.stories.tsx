import { Story } from '@storybook/react';
import Spinner from '../components/Loader/Spinner';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Loader',
  component: Spinner,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const Spin: Story = () => <Spinner />;
