// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Button  from './Button1';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Base:Story={
  args:{
    children:"Button",
  }
}

export const Disabled:Story={
  args:{
    disabled:true,
    children:"Button",
  }
}