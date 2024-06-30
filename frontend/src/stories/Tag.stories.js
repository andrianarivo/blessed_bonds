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

export const Default = {
  args: {
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
};
