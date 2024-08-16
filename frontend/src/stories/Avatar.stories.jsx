import Avatar from '../components/Avatar';
import Users from '../components/Users';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    role: { table: { disable: true } },
    tabIndex: { table: { disable: true } },
  },
};

export const User1 = {
  args: {
    author: 'Nirintsoa',
  },
};

export const User2 = {
  args: {
    author: 'Mialy Ranaivo',
  },
};

export const User3 = {
  args: {
    author: 'Christina Randrianarivo',
  },
};

export const User4 = {
  args: {
    author: 'Gabriel Ramanantsoa',
  },
};

export const User5 = {
  args: {
    author: 'Volasoa Razafintsalama',
  },
};

export const ThreeUsers = {
  render: (args) => (
    <Users {...args}>
      <Avatar {...User1.args} />
      <Avatar {...User2.args} />
      <Avatar {...User3.args} />
    </Users>
  ),
};

export const FiveUsers = {
  render: (args) => (
    <Users {...args}>
      <Avatar {...User1.args} />
      <Avatar {...User2.args} />
      <Avatar {...User3.args} />
      <Avatar {...User4.args} />
      <Avatar {...User5.args} />
    </Users>
  ),
};

export const TenPlusUsers = {
  render: (args) => (
    <Users {...args}>
      <Avatar {...User1.args} />
      <Avatar {...User2.args} />
      <Avatar {...User3.args} />
      <Avatar {...User4.args} />
      <Avatar {...User5.args} />
      <Avatar {...User1.args} />
      <Avatar {...User2.args} />
      <Avatar {...User3.args} />
      <Avatar {...User4.args} />
      <Avatar {...User5.args} />
      <Avatar {...User1.args} />
      <Avatar {...User2.args} />
      <Avatar {...User3.args} />
      <Avatar {...User4.args} />
      <Avatar {...User5.args} />
    </Users>
  ),
};
