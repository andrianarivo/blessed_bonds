import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ label, bgColor, color }) {
  return <div>Tag</div>;
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};
