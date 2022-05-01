import { Story } from '@storybook/react';
import HolographyOutset from '../components/Holography/HolographyOutset';
import HolographyInset from '../components/Holography/HolographyInset';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Holography',
  component: HolographyInset,
  decorators: [
    (Story: Story) => (
      <StoryLayout background="white">
        <Story />
      </StoryLayout>
    ),
  ],
  parameters: {
    docs: {
      description: { component: '크리보가 카드 안에 갇혀있습니다. 착한 사람 눈에만 보여요.' },
    },
  },
};

export const Inset = () => <HolographyInset />;
export const Outset = () => <HolographyOutset />;
