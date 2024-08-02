/* eslint-disable import/no-extraneous-dependencies */

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
  },
};

export const Answers = {
  args: {
    icon: 'priority',
    title: 'answers',
  },
};

export const Notes = {
  args: {
    icon: 'wysiwyg',
    title: 'notes',
  },
};
