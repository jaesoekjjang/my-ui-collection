import { Story } from '@storybook/react';
import Carousel from '../components/Carousel';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Carousel',
  component: Carousel,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
};

export const InfiniteCarousel = () => <Carousel />;
