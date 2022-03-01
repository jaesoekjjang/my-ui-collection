import { Story } from '@storybook/react';
import Cube from '../components/Cube';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Cube',
  component: Cube,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="radial-gradient(#ffcf9c, #ffa94d)">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const ThreeDRotation = () => <Cube />;
