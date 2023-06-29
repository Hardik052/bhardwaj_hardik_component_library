import { StoryObj, Meta } from '@storybook/react';
import Table from './table';

const meta: Meta<typeof Table> = {
  component: Table,
  title: "components/table",
};

export default meta;

type TemplateTable= StoryObj<typeof meta>;


export const tables:TemplateTable = {
  args:{
  columns: [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'College', accessor: 'college' },
  ],
  data: [
    { name: 'Hardik', age: 19, college: 'RRC' },
    { name: 'navjit', age: 20, college: 'RRC' },
    { name: 'Bao', age: 18, college: 'MITT' },
  ],
}
}