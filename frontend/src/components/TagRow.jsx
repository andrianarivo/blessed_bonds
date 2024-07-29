import React, { Children } from 'react';
import PropTypes from 'prop-types';

const TagRow = ({ children }) => (
  <ul className="flex flex-wrap gap-2 list-none">
    {Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </ul>
);

TagRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TagRow;
