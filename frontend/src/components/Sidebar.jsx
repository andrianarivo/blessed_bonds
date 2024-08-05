import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

const Sidebar = ({ children, classNames = '' }) => {
  const containerClass = cl(
    'top-0',
    'bottom-0',
    'left-0',
    'p-2',
    'w-menulg',
    'overflow-y-auto',
    'border-r',
    'border-gray-200',
    'fixed',
    'z-40',
    'bg-white',
    classNames
  );
  return (
    <div className={containerClass}>
      {Children.map(children, (child) => child)}
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  classNames: PropTypes.string,
};

export default Sidebar;
