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
    sidebarToggle: { table: { disable: true } },
    onClickProfile: { table: { disable: true } },
    onClickSettings: { table: { disable: true } },
    onClickLogout: { table: { disable: true } },
  },
};

const Template = {
  render: (args) => <Navbar {...args} />,
  args: {
    username: 'David Stanley',
    location: 'MG, Antananarivo',
    id: 'app-drawer',
  },
};

export const Default = {
  ...Template,
  args: {
    ...Template.args,
  },
};

export const WithDrawer = {
  render: (args) => (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Template.render {...args} {...Template.args} />
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
  args: {
    sidebarToggle: (
      <label htmlFor="app-drawer" className="btn btn-ghost drawer-button">
        <span className="material-symbols-rounded text-gray-400">menu</span>
        <input hidden type="checkbox" />
      </label>
    ),
  },
};
