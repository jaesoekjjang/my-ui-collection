import { Story } from '@storybook/react';
import ClipText from '../components/ClipText';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/ClipText',
  component: ClipText,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="black">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const InfiniteClipText = () => <ClipText />;
