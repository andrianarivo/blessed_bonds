import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ title, content }) => (
  <div
    tabIndex="0"
    role="button"
    className="flex flex-col gap-y-2 shadow-sm p-4 rounded-2xl border-base-300 border bg-white cursor-default"
  >
    <div className="text-md font-medium">{title}</div>
    <p className="font-normal text-sm text-gray-400">{content}</p>
  </div>
);

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Answer;
