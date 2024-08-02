import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Menu = ({ children, large = true }) => {
  const menuClass = classNames(
    'top-0',
    'bottom-0',
    'left-0',
    'p-2',
    'w-menulg',
    'overflow-y-auto',
    'border-r-2',
    'border-gray-200',
    'fixed',
    'z-50',
    'transition-width',
    'transform',
    'ease-in-out',
    'duration-200',
    'bg-white',
    {
      'w-menulg': large,
    },
    {
      'w-menusm': !large,
    }
  );
  return (
    <div className={menuClass}>{Children.map(children, (child) => child)}</div>
  );
};

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  large: PropTypes.bool,
};

export default Menu;
