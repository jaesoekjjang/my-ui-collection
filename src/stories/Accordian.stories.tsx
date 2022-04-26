import { Story } from '@storybook/react';
import Accordian from '../components/Accordian';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Accordian',
  component: Accordian,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicAccordian: Story = () => <Accordian />;
