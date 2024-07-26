import Tag from '../components/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Tag1 = {
  args: {
    label: 'Finance 1',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
};

export const Tag2 = {
  args: {
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b5',
  },
};
