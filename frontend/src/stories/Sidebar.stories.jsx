import Sidebar from '../components/Sidebar';
import MenuItem from '../components/MenuItem';
import Logo from '../components/Logo';

import { Section1, Section2 } from './MenuSection.stories';

export default {
  title: 'Playground/Sidebar',
  component: Sidebar,
  subcomponents: { MenuItem },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
};

const Sider = {
  render: (args) => (
    <Sidebar {...args}>
      <div className="divide-y">
        <div className="flex justify-between items-center">
          <Logo />
        </div>
        <Section1.render />
        <Section2.render />
      </div>
    </Sidebar>
  ),
};

export const Default = {
  render: (args) => (
    <div className="h-screen">
      <Sider.render {...args} />
    </div>
  ),
};

export const Drawer = {
  render: (args) => (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full h-screen flex justify-center items-center p-4">
        <label htmlFor="app-drawer" className="btn btn-primary drawer-button">
          Open drawer
          <input hidden type="checkbox" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input hidden type="checkbox" />
        </label>
        <Sider.render {...args} />
      </div>
    </div>
  ),
};
