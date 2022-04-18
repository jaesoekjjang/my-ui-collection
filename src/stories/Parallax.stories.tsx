import { Story } from '@storybook/react';
import HolographyOutset from '../components/Parallax/HolographyOutset';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Parallax',
  decorators: [
    (Story: Story) => (
      <StoryLayout background="black">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicHolographyOutset = () => <HolographyOutset />;
