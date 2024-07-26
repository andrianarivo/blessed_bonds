import React, { Children } from 'react';
import PropTypes from 'prop-types';

const NoteBox = ({ children }) => (
  <div>{Children.map(children, (child) => child)}</div>
);

NoteBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default NoteBox;
