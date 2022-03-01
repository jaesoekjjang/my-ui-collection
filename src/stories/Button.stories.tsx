import { Story } from '@storybook/react';
import Button from '../components/Button';
import styled from 'styled-components';
import StoryLayout from '../components/StoryLayout';

export default {
  title: 'CSS/Button',
  component: Button,
  decorators: [
    (Story: Story) => (
      <StoryLayout>
        <Story />
      </StoryLayout>
    ),
  ],
};

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  theme: 'warning',
};

export const sizes = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div>
        <Description>Small</Description>
        <Button size="sm" />
      </div>
      <div>
        <Description>Medium</Description>
        <Button size="md" />
      </div>
      <div>
        <Description>Large</Description>
        <Button size="lg" />
      </div>
    </div>
  );
};

const Description = styled.div`
  margin-bottom: 8px;
`;
