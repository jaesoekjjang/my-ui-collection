import { Story } from '@storybook/react';
import HideAppBar from '../components/HideAppBar';

export default {
  title: 'CSS/AppBar',
  component: HideAppBar,
};

export const HideOnScroll: Story = () => <HideAppBar />;
