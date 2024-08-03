import { fn } from '@storybook/test';

import MenuSection from '../components/MenuSection';
import MenuItem from '../components/MenuItem';

import { Home, Answers, Notes, Career, Ministry } from './MenuItem.stories';

export default {
  title: 'Components/MenuSection',
  component: MenuSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
