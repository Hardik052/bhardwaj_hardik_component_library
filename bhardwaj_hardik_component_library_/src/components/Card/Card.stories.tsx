
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = () => {
  return (
    <Card
      title="Hi I am Card"
      description="This is an example card component."
    />
  );
};
