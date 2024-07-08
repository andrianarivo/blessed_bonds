import Note from '../components/Note';

export default {
  title: 'Example/Note',
  component: Note,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    createdAt: { control: 'date' },
    iconUrl: { control: 'text' },
    author: { control: 'text' },
    isOwn: { control: 'boolean' },
  },
};

export const Example1 = {
  args: {
    title: 'I hear the Gospel in my dreams',
    text: '# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. ',
    author: 'David Stanley',
    isOwn: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
};
