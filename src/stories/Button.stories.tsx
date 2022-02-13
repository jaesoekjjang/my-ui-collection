import Button from '../components/Button'
import {Story} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

export default{
  title: 'Components/Button',
  component: Button,
  decorators:[withKnobs],
}

const Template:Story = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme:'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme:'secondary',
}

export const Warning = Template.bind({})
Warning.args = {
  theme: 'warning',
}

export const sizes = () => {
  return (
    <div style={{display: 'flex', gap:'16px'}}>
      <div>
        <div className="description" style={{marginBottom:'8px'}}>Small</div>
        <Button size="sm"/>
      </div>
      <div>
        <div className="description" style={{marginBottom:'8px'}}>Medium</div>
        <Button size="md"/>
      </div>
      <div>
        <div className="description" style={{marginBottom:'8px'}}>Large</div>
        <Button size="lg"/>
      </div>
    </div>
  );
};