import { Story } from '@storybook/react';
import Accordian from '../components/Accordian';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'Components/Accordian',
  component: Accordian,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#74c0fc">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicAccordian: Story = () => <Accordian />;
