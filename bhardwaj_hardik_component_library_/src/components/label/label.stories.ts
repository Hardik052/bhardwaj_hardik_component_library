
import { StoryObj, Meta } from '@storybook/react';
import label from './label';

const meta: Meta<typeof label> = {
  component: label,
  title: "components/label",

};

export default meta;
type Story = StoryObj<typeof label>;



export const default_label:Story={
  args:{
    children:"Label"
  }
}