import { Story } from '@storybook/react';
import Cube from '../components/Cube';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'Components/Cube',
  component: Cube,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="radial-gradient(#ffcf9c, #ffa94d)">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const BasicCube = () => <Cube />;
