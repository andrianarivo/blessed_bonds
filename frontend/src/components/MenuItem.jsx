import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = ({
  icon = undefined,
  title = 'home',
  color = undefined,
  active = false,
  useDot = false,
  large = false,
}) => {
  const buttonClass = classNames(
    'flex',
    'flex-nowrap',
    'gap-2',
    'btn',
    'btn-ghost',
    'font-medium',
    'capitalize',
    'w-full',
    {
      'text-gray-500': !active,
    },
    {
      'bg-purple-200': active,
    },
    {
      'text-gray-900': active,
    },
    {
      'justify-start': !large,
    },
    {
      'justify-center': large,
    }
  );
  return (
    <button type="button" className={buttonClass}>
      {icon && (
        <span className="material-symbols-outlined" style={{ color }}>
          {icon}
        </span>
      )}
      {useDot && (
        <div
          className="rounded-full w-2 h-2"
          style={{ backgroundColor: color }}
        />
      )}
      {!large && title}
    </button>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  useDot: PropTypes.bool,
  large: PropTypes.bool,
};

export default MenuItem;
