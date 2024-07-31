import React, { Children } from 'react';
import PropTypes from 'prop-types';

const MenuSection = ({ children }) => (
  <div>{Children.map(children, (child) => child)}</div>
);

MenuSection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MenuSection;
