import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Users = ({ children }) => {
  const count = Children.count(children) <= 4 ? Children.count(children) : 4;
  const remaining = Children.count(children) - 4;
  const width = `${2.5 * count}rem`;

  const dropdownClassName = classNames('relative', {
    'cursor-default': remaining <= 0,
  });
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="btn btn-ghost btn-sm font-medium text-indigo-600"
      >
        <span className="material-symbols-outlined bg-indigo-100 text-xs rounded w-[15px] h-[15px]">
          add
        </span>
        Invite
      </button>
      <div className="dropdown dropdown-end">
        <div
          tabIndex="0"
          role="button"
          className={dropdownClassName}
          style={{
            width,
            height: '2.5rem',
          }}
        >
          {Children.map(children, (child, index) => {
            if (index < 4) {
              return (
                <div
                  className="absolute"
                  style={{
                    left: `${2 * index}rem`,
                  }}
                >
                  {child}
                </div>
              );
            }
            return null;
          })}
          {remaining > 0 && (
            <div
              className="absolute"
              style={{
                left: `${2 * 4}rem`,
              }}
            >
              <span className="text-red-600 bg-red-100 rounded-full w-10 h-10 avatar flex items-center justify-center font-medium">
                {remaining <= 10 ? `+${remaining}` : '10+'}
              </span>
            </div>
          )}
        </div>
        {remaining > 0 && (
          <div className="dropdown-content">
            <div className="p-4 shadow-sm bg-white flex gap-1 flex-wrap rounded-md w-52">
              {Children.map(children, (child) => child)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Users.propTypes = {
  children: PropTypes.element,
};

export default Users;
