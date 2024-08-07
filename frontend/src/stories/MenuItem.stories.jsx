import { fn } from '@storybook/test';

import MenuItem from '../components/MenuItem';
import MenuSection from '../components/MenuSection';
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
    icon: 'ac_unit',
    title: 'home',
    onClick: fn(),
    large: true,
  },
};

export const Answers = {
  args: {
    icon: 'priority',
    title: 'answers',
    onClick: fn(),
    large: true,
  },
};

export const Notes = {
  args: {
    icon: 'wysiwyg',
    title: 'notes',
    onClick: fn(),
    large: true,
  },
};

export const Career = {
  args: {
    useDot: true,
    color: '#7ac554',
    title: 'career',
    onClick: fn(),
    large: true,
    active: true,
  },
};

export const Ministry = {
  args: {
    useDot: true,
    color: '#f7a501',
    title: 'ministry',
    onClick: fn(),
    large: true,
  },
};

export const Section1 = {
  render: (args) => (
    <MenuSection {...args}>
      <MenuItem {...Home.args} />
      <MenuItem {...Answers.args} />
      <MenuItem {...Notes.args} />
    </MenuSection>
  ),
};

export const Section2 = {
  render: (args) => (
    <MenuSection canAddMore title="My topics" {...args}>
      <MenuItem {...Career.args} />
      <MenuItem {...Ministry.args} />
    </MenuSection>
  ),
  args: {
    onAddMore: fn(),
  },
};
