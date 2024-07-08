import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ label, backgroundColor = '#ffece1', color = '#ff5c00' }) => {
  const style = {
    backgroundColor,
    color,
  };

  return (
    <div style={style} className="py-1 px-3 text-sm rounded-md font-semibold">
      {label}
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default Tag;
