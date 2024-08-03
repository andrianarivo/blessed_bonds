import { fn } from '@storybook/test';

import MenuItem from '../components/MenuItem';
import materialIcons from './assets/material-icons-list.json';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: materialIcons,
    },
  },
};

export const Home = {
  args: {
    icon: 'browse',
    title: 'home',
    onClick: fn(),
  },
};

export const Answers = {
  args: {
    icon: 'priority',
    title: 'answers',
    onClick: fn(),
  },
};

export const Notes = {
  args: {
    icon: 'wysiwyg',
    title: 'notes',

    onClick: fn(),
  },
};

export const Career = {
  args: {
    useDot: true,
    color: '#7ac554',
    title: 'career',

    onClick: fn(),
  },
};

export const Ministry = {
  args: {
    useDot: true,
    color: '#f7a501',
    title: 'ministry',
    onClick: fn(),
  },
};
