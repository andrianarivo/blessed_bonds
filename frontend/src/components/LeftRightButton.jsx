import React from 'react';
import PropTypes from 'prop-types';

const LeftRightButton = ({ left = true, onToggle = undefined }) =>
  left ? (
    <button onClick={onToggle} type="button" className="btn btn-ghost btn-sm">
      <span className="material-symbols-outlined text-gray-400">
        keyboard_double_arrow_left
      </span>
    </button>
  ) : (
    <button onClick={onToggle} type="button" className="btn btn-ghost btn-sm">
      <span className="material-symbols-outlined text-gray-400">
        keyboard_double_arrow_right
      </span>
    </button>
  );

LeftRightButton.propTypes = {
  left: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default LeftRightButton;
