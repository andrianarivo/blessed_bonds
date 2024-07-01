import Tag from '../components/Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    label: { control: 'text' },
  },
};

export const Example1 = {
  args: {
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
};

export const Example2 = {
  args: {
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b5',
  },
};
