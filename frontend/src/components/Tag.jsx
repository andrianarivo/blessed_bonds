import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ label, backgroundColor, color }) {
  const style = {
    backgroundColor,
    color,
  };

  return (
    <div style={style} className="py-1 px-3 text-sm rounded-md font-semibold">
      {label}
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
