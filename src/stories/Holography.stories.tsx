import { Story } from '@storybook/react';
import HolographyOutset from '../components/Holography/HolographyOutset';
import HolographyInset from '../components/Holography/HolographyInset';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Holography',
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const Inset = () => <HolographyInset />;
export const Outset = () => <HolographyOutset />;

type PropType = {
  explain: string;
  isOpen: boolean;
  opClose: () => void;
};
