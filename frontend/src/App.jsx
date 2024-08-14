import './App.css';
import React from 'react';
import MenuItem from './components/MenuItem';
import MenuSection from './components/MenuSection';
import FlashMessage from './components/FlashMessage';
import Sidebar from './components/Sidebar';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Avatar from './components/Avatar';

const App = () => (
  <div className="drawer">
    <input id="app-drawer" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content">
      <Navbar
        hamburger={
          <label htmlFor="app-drawer" className="btn btn-ghost drawer-button">
            <span className="material-symbols-outlined text-gray-400">
              menu
            </span>
            <input hidden type="checkbox" />
          </label>
        }
        username="David Stanley"
        location="MG, Antananarivo"
      />

      <div className="w-full">
        <Users>
          <Avatar author="David Stanley" />
          <Avatar author="David Stanley" />
          <Avatar author="David Stanley" />
          <Avatar author="David Stanley" />
        </Users>
      </div>
    </div>

    <div className="drawer-side z-50">
      <label
        htmlFor="app-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      >
        <input hidden type="checkbox" />
      </label>
      <Sidebar className="flex flex-col justify-between">
        <div className="divide-y-2">
          <div className="flex justify-between items-center">
            <Logo />
          </div>
          <MenuSection>
            <MenuItem icon="action_key" />
            <MenuItem icon="priority" title="answers" />
            <MenuItem icon="wysiwyg" title="notes" />
          </MenuSection>
          <MenuSection title="my topics" canAddMore>
            <MenuItem title="Career" color="#7ac554" useDot active />
            <MenuItem title="Ministry" color="#f7a501" useDot />
          </MenuSection>
        </div>
        <div className="flex justify-center items-center">
          <FlashMessage />
        </div>
      </Sidebar>
    </div>
  </div>
);

export default App;
