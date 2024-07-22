import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ title, content }) => (
  <div
    tabIndex={0}
    role="button"
    className="collapse collapse-arrow border-base-300 border"
  >
    <div className="collapse-title text-md font-medium">{title}</div>
    <div className="collapse-content">
      <p className="font-normal text-sm text-gray-500">{content}</p>
    </div>
  </div>
);

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Answer;
