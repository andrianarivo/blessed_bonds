import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AnswerContainer = ({ className = '', children }) => {
  const wrapperClass = classNames(
    'p-2',
    'bg-gray-400-blur',
    'backdrop-blur-md',
    'rounded-xl',
    className
  );

  return <div className={wrapperClass}>{children}</div>;
};

AnswerContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AnswerContainer;
