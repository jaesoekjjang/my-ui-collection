import { Story } from '@storybook/react';
import Modal from '../components/Modal';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Modal',
  component: Modal,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#ffffff">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicModal: Story = () => <Modal />;
