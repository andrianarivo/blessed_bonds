import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

const FlashMessage = ({ className }) => {
  const wrapperClass = cl(className);
  return (
    <div className={wrapperClass}>
      <div className="relative flex flex-col justify-center items-center bg-gray-100 rounded-xl p-4 gap-4">
        <div className="absolute -top-8 p-4 bg-gray-100 rounded-full">
          <span className="material-symbols-outlined text-yellow-500">
            lightbulb
          </span>
        </div>
        <p className="text-sm font-medium z-20">Thoughts Time</p>
        <p className="text-xs text-center text-gray-400">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <button type="button" className="btn bg-white font-medium">
          Write a message
        </button>
      </div>
    </div>
  );
};

FlashMessage.propTypes = {
  className: PropTypes.string,
};

export default FlashMessage;
