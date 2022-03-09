import { Story } from '@storybook/react';
import StoryLayout from '../components/StoryLayout';
import SpinningBubble from '../components/Loader/SpinningBubble';
import SpinningCurve from '../components/Loader/SpinningCurve';

export default {
  title: 'CSS/Loader',
  component: SpinningBubble,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const Bubble: Story = () => <SpinningBubble />;

export const Curve: Story = () => <SpinningCurve />;
