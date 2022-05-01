import { Story } from '@storybook/react';
import Hover from '../components/HoverCard';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Card',
  component: Hover,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#EBECF0">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const HoverCard: Story = () => <Hover />;
