import { Story } from '@storybook/react';
import EnlargeableCard from '../components/EnlargeableCard';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/EnlargeableCard',
  component: EnlargeableCard,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#EBECF0">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicEnlargeableCard: Story = () => <EnlargeableCard />;
