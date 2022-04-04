import { Story } from '@storybook/react';
import List from '../components/Draggable/List';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Draggable',
  component: List,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="#f5f5f5">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const DraggableList = () => <List />;
