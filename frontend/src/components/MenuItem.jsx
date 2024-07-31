import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItem = ({ icon = 'browse', title = 'home', active = false }) => {
  const buttonClass = classNames(
    'flex',
    'gap-2',
    'btn',
    'btn-ghost',
    'font-medium',
    'capitalize',
    'w-full',
    'justify-start',
    {
      'text-gray-500': !active,
    },
    {
      'bg-purple-200': active,
    },
    {
      'text-gray-900': active,
    }
  );
  return (
    <button type="button" className={buttonClass}>
      <span className="material-symbols-outlined">{icon}</span>
      {title}
    </button>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
};

export default MenuItem;
