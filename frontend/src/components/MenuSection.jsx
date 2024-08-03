import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuSection = ({
  children,
  title,
  canAddMore = false,
  large = true,
  onAddMore = undefined,
}) => {
  const titleContainerClass = classNames(
    'flex',
    'justify-start',
    'items-center',
    'uppercase',
    'p-4',
    'text-gray-500',
    'text-xs',
    'font-bold',
    'gap-x-4',
    {
      'justify-between': large,
    },
    {
      'justify-center': !large,
    }
  );
  return (
    <div>
      {((title && large) || canAddMore) && (
        <div className={titleContainerClass}>
          {large && <p className="line-clamp-1">{title}</p>}
          {canAddMore && (
            <button
              type="button"
              className="flex items-center border border-gray-500 rounded-md px-[2px] active:bg-gray-200"
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
};

MenuSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string,
  canAddMore: PropTypes.bool,
  large: PropTypes.bool,
  onAddMore: PropTypes.func,
};

export default MenuSection;
