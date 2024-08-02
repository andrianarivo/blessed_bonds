import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Sidebar = ({ children, large = true }) => (
  <motion.div
    animate={{
      width: large ? 250 : 80,
    }}
    transition={{
      type: 'spring',
    }}
    className="top-0 bottom-0 left-0 p-2 w-menulg overflow-y-auto border-r-2 border-gray-200 fixed z-40 bg-white"
  >
    {Children.map(children, (child) => child)}
  </motion.div>
);

Sidebar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  large: PropTypes.bool,
};

export default Sidebar;
