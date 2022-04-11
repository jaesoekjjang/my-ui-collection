import { Story } from '@storybook/react';
import Enlargeable from '../components/Card/Enlargeable';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Card',
  component: Enlargeable,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#EBECF0">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const EnlargeableCard: Story = () => <Enlargeable />;
