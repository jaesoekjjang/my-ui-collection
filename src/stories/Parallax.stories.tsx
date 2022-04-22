import { Story } from '@storybook/react';
import HolographyOutset from '../components/Parallax/HolographyOutset';
import HolographyInset from '../components/Parallax/HolographyInset';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Parallax',
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicHolographyOutset = () => <HolographyOutset />;
export const BasicHolographyInset = () => <HolographyInset />;
