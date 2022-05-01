import { Story } from '@storybook/react';
import StoryLayout from '../components/StoryLayout';
import SpinningBubble from '../components/Loader/SpinningBubble';
import SpinningCurve from '../components/Loader/SpinningCurve';

export default {
  title: 'CSS/Loader',
  decorators: [
    (Story: Story) => (
      <StoryLayout background="black">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const Bubble: Story = () => <SpinningBubble />;
export const Curve: Story = () => <SpinningCurve />;
