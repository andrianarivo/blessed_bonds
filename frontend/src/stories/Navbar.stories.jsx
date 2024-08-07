import Navbar from '../components/Navbar';

import { Default as Sidebar } from './Sidebar.stories';

export default {
  title: 'Playground/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    hamburger: { table: { disable: true } },
    onClickProfile: { table: { disable: true } },
    onClickSettings: { table: { disable: true } },
    onClickLogout: { table: { disable: true } },
  },
};

const Template = {
  render: (args) => (
    <Navbar
      hamburger={
        <label htmlFor="app-drawer" className="btn btn-ghost drawer-button">
          <span className="material-symbols-outlined text-gray-400">menu</span>
          <input hidden type="checkbox" />
        </label>
      }
      {...args}
    />
  ),
};

export const Default = {
  ...Template,
};

export const Drawer = {
  render: () => (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content w-full min-h-full flex flex-col justify-center items-center gap-4">
        <Template.render />
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input hidden type="checkbox" />
        </label>
        <Sidebar.render />
      </div>
    </div>
  ),
};
