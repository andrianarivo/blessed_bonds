import './App.css';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import MenuItem from './components/MenuItem';
import MenuSection from './components/MenuSection';
import FlashMessage from './components/FlashMessage';
import Sidebar from './components/sidebar/Sidebar';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Avatar from './components/Avatar';
import Status from './components/Status';
import Prayer from './components/Prayer';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';

const prayers = [
  {
    id: 1,
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 0,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 0,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 3,
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 0,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];

const App = () => {
  const [parent, setParent] = useState('vision');

  const handleDragEnd = (event) => {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  };

  const prayer = (
    <Draggable id={prayers[0].id} key={prayers[0].id}>
      <Prayer
        summary={prayers[0].summary}
        description={prayers[0].description}
        createdAt={prayers[0].createdAt}
        author={prayers[0].author}
        noteCount={prayers[0].noteCount}
        answersCount={prayers[0].answersCount}
      />
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="drawer lg:drawer-open h-full">
        <input id="app-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col lg:ml-sidebar">
          <Navbar
            username="David Stanley"
            location="MG, Antananarivo"
            sidebarToggle={
              <label
                htmlFor="app-drawer"
                className="btn btn-ghost drawer-button lg:hidden"
              >
                <span className="material-symbols-rounded text-gray-400">
                  menu
                </span>
                <input hidden type="checkbox" />
              </label>
            }
          />

          <div className="w-full p-4">
            <button
              className="btn btn-square rounded-2xl btn-lg bg-indigo-600 text-white absolute bottom-4 right-4"
              type="button"
            >
              <span className="material-symbols-rounded text-6xl">add</span>
            </button>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline">
                  <p className="text-4xl tracking-wide">Career</p>
                  <div className="flex gap-4 ml-32">
                    <button
                      className="btn btn-xs btn-square bg-purple-100 text-purple-400"
                      type="button"
                    >
                      <span className="material-symbols-rounded text-sm">
                        edit
                      </span>
                    </button>
                    <button
                      className="btn btn-xs btn-square bg-purple-100 text-purple-400"
                      type="button"
                    >
                      <span className="material-symbols-rounded text-sm">
                        link
                      </span>
                    </button>
                  </div>
                </div>
                <Users>
                  <Avatar author="David Stanley" />
                  <Avatar author="David Stanley" />
                  <Avatar author="David Stanley" />
                  <Avatar author="David Stanley" />
                </Users>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    className="btn btn-outline btn-sm border-gray-300 text-gray-400"
                    type="button"
                  >
                    <span className="material-symbols-rounded text-sm">
                      filter_alt
                    </span>
                    Filter
                    <span className="material-symbols-rounded text-gray-400">
                      keyboard_arrow_down
                    </span>
                  </button>
                  <button
                    className="btn btn-outline btn-sm border-gray-300 text-gray-400"
                    type="button"
                  >
                    <span className="material-symbols-rounded text-sm">
                      today
                    </span>
                    Today
                    <span className="material-symbols-rounded text-gray-400">
                      keyboard_arrow_down
                    </span>
                  </button>
                </div>
                <div className="divide-x flex gap-4">
                  <button
                    className="btn btn-outline btn-sm border-gray-300 text-gray-400"
                    type="button"
                  >
                    <span className="material-symbols-rounded text-sm">
                      share
                    </span>
                    Share
                  </button>
                  <div className="flex gap-4">
                    <button
                      className="btn btn-sm btn-square btn-ghost btn-active ml-4"
                      type="button"
                    >
                      <span className="material-symbols-rounded symbols-filled  text-sm">
                        view_agenda
                      </span>
                    </button>
                    <button
                      className="btn btn-sm btn-square btn-ghost mr-4"
                      type="button"
                    >
                      <span className="material-symbols-rounded symbols-filled  text-sm">
                        grid_view
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-evenly w-full overflow-x-auto gap-4">
            <Droppable id="vision">
              <Status title="Vision" badge={1} color="#5030e5">
                {parent === 'vision' ? prayer : null}
              </Status>
            </Droppable>
            <Droppable id="engaging">
              <Status title="Engaging" badge={1} color="#ffa503">
                {parent === 'engaging' ? prayer : null}
              </Status>
            </Droppable>
            <Droppable id="harvest">
              <Status title="Harvest" badge={1} color="#8ac489">
                {parent === 'harvest' ? prayer : null}
              </Status>
            </Droppable>
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
            <div className="divide-y">
              <Logo />
              <MenuSection>
                <MenuItem icon="business_center" />
                <MenuItem icon="check_circle_outline" title="answers" />
                <MenuItem icon="wysiwyg" title="notes" />
              </MenuSection>
              <MenuSection title="my topics" canAddMore>
                <MenuItem title="Career" color="#7ac554" useDot active />
                <MenuItem title="Ministry" color="#f7a501" useDot />
              </MenuSection>
            </div>
            <div className="flex justify-center items-center mb-2">
              <FlashMessage />
            </div>
          </Sidebar>
        </div>
      </div>
    </DndContext>
  );
};

export default App;
