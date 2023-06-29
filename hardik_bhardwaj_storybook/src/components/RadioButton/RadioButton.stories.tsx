import  { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioButton
        label="Radio 1"
        value="option1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <RadioButton
        label="Radio 2"
        value="option2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
      />
      <RadioButton
        label="Radio 3"
        value="option3"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
      />
    </div>
  );
};
