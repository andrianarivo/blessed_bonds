import React, { Children } from 'react';
import PropTypes from 'prop-types';

const MenuSection = ({
  children,
  title,
  canAddMore = false,
  onAddMore = undefined,
}) => (
  <div>
    {(title || canAddMore) && (
      <div className="flex justify-start items-center uppercase p-4 text-gray-500 text-xs font-bold gap-x-4 justify-between">
        {title && <p className="line-clamp-1">{title}</p>}
        {canAddMore && (
          <button
            type="button"
            className="flex items-center justify-center border border-gray-500 w-[15px] h-[15px] rounded active:bg-gray-200"
            onClick={onAddMore}
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
  onAddMore: PropTypes.func,
};

export default MenuSection;
