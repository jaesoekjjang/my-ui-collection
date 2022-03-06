import { Story } from '@storybook/react';
import DraggableList from '../components/DraggableList';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/List',
  component: DraggableList,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const Draggable = () => <DraggableList />;
