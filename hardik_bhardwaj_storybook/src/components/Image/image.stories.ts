import { StoryObj, Meta } from '@storybook/react';
import Image from './image';

const meta: Meta<typeof Image> = {
  component: Image,
  title: "components/image",
};

export default meta;

type TemplateImage= StoryObj<typeof meta>;

export const image:TemplateImage = {
args: {
  src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  alt: 'image',
  width: 500,
  height: 400,
}
}
