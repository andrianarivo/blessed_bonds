import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ title, content, onEdit, onRemove }) => (
  <div
    tabIndex="0"
    role="button"
    className="flex flex-col gap-y-2 shadow-sm p-4 rounded-2xl border-base-300 border bg-white cursor-default"
  >
    <div className="text-md font-medium">{title}</div>
    <p className="font-normal text-sm text-gray-400">{content}</p>
    <div className="flex gap-2 self-end">
      <button
        type="button"
        className="btn btn-circle bg-blue-600"
        onClick={onEdit}
      >
        <span className="material-symbols-outlined text-2xl text-white">
          edit
        </span>
      </button>
      <button
        type="button"
        className="btn btn-circle bg-orange-500"
        onClick={onRemove}
      >
        <span className="material-symbols-outlined text-2xl text-white">
          delete
        </span>
      </button>
    </div>
  </div>
);

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Answer;
