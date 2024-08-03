import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logo.jpg';

const Logo = ({ large = true }) => (
  <div className="flex items-center gap-2 m-4">
    <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
    {large && (
      <p className="text-purple-800 text-lg font-medium line-clamp-1">
        Prayerdom
      </p>
    )}
  </div>
);

Logo.propTypes = {
  large: PropTypes.bool,
};

export default Logo;
