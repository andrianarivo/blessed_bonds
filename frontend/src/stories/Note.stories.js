import Note from '../components/Note';

export default {
  title: 'Components/Note',
  component: Note,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Note1 = {
  args: {
    title: 'I hear the Gospel in my dreams',
    content:
      '# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. ',
    isOwn: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
};

export const Note2 = {
  args: {
    title: 'Jesus is the Messiah',
    content:
      '# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. ',
    author: 'David Stanley',
    isOwn: true,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
};
