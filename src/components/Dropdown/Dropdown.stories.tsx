
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const options = ['C++', 'JAVA', 'Python'];

export const Default = () => {
  return <Dropdown options={options} />;
};
