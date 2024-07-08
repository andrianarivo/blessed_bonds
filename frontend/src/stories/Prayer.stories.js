import PrayerContainer from '../components/PrayerContainer';

export default {
  title: 'Example/Prayer',
  component: PrayerContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    summary: { control: 'text' },
    description: { control: 'text' },
    createdAt: { control: 'date' },
    iconUrl: { control: 'text' },
    author: { control: 'text' },
    noteCount: { control: 'number' },
    answersCount: { control: 'number' },
    tags: { control: 'object' },
  },
};

const tags = [
  {
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
  {
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b4',
  },
];

export const Example1 = {
  args: {
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 2,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
    tags,
  },
};
