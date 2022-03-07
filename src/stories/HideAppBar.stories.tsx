import { Story } from '@storybook/react';
import HideAppBar from '../components/HideAppBar';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/AppBar',
  component: HideAppBar,
};

export const HideOnScroll: Story = () => <HideAppBar />;
