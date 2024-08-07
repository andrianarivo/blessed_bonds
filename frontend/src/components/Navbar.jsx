import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({
  hamburger = undefined,
  onClickProfile = undefined,
  onClickSettings = undefined,
  onClickLogout = undefined,
}) => (
  <div className="navbar bg-white shadow-b-md border-b">
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
        {hamburger}
        <div className="form-control w-96">
          <div className="input bg-gray-100 text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400">
              search
            </span>
            <input
              name="search"
              type="text"
              className="grow"
              placeholder="Search for anything..."
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-end">
          <p className="text-lg">David Stanley</p>
          <p className="text-sm font-extralight">MG, Antananarivo</p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-500">
            <li>
              <button
                type="button"
                className="btn btn-ghost justify-between"
                onClick={onClickProfile}
              >
                Profile
                <span className="material-symbols-outlined">face</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-ghost justify-between"
                onClick={onClickSettings}
              >
                Settings
                <span className="material-symbols-outlined">settings</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-ghost justify-between text-red-400"
                onClick={onClickLogout}
              >
                Logout
                <span className="material-symbols-outlined">
                  power_settings_new
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  hamburger: PropTypes.element,
  onClickProfile: PropTypes.func,
  onClickSettings: PropTypes.func,
  onClickLogout: PropTypes.func,
};

export default Navbar;
