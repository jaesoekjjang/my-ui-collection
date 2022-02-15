import { Story } from "@storybook/react";
import ThreeDRotation from "../components/Rotation/ThreeDRotation";
import StoryLayout from "../components/StoryLayout";

export default{
  title: 'Components/Rotation',
  component: ThreeDRotation,
  decorators: [
    (Story: Story) => (
      <StoryLayout background='radial-gradient(#ffcf9c, #fcbf7d, #ffa94d)'>
        <Story />
      </StoryLayout>
    )
  ]
}

const Template: Story = () => <ThreeDRotation />


export const ThreeD = Template.bind({})
