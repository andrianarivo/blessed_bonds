import React, { Children } from 'react';
import PropTypes from 'prop-types';

const MenuSection = ({ children, title, canAddMore = false }) => (
  <div>
    {title && (
      <div className="flex justify-between items-center uppercase p-4 text-gray-500 text-xs font-bold">
        {title}
        {canAddMore && (
          <button
            type="button"
            className="flex items-center border border-gray-500 rounded-md px-[2px] active:bg-gray-200"
          >
            <span className="material-symbols-outlined text-xs text-gray-500">
              add
            </span>
          </button>
        )}
      </div>
    )}
    {Children.map(children, (child) => child)}
  </div>
);

MenuSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string,
  canAddMore: PropTypes.bool,
};

export default MenuSection;
