import { Story } from '@storybook/react';
import Skeleton from '../components/Skeleton';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Skeleton',
  component: Skeleton,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="black">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicSkeleton: Story = () => <Skeleton />;
