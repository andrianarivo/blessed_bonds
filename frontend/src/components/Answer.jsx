import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ title, content, onClickEdit, onClickRemove }) => (
  <div className="flex flex-col gap-y-2 shadow-sm p-4 rounded-2xl border-base-300 border bg-white">
    <div className="text-md font-medium">{title}</div>
    <p className="font-normal text-sm text-gray-400">{content}</p>
    <div className="flex gap-2 self-end">
      <button
        type="button"
        className="btn btn-circle bg-blue-600"
        onClick={onClickEdit}
      >
        <span className="material-symbols-rounded text-2xl text-white">
          edit
        </span>
      </button>
      <button
        type="button"
        className="btn btn-circle bg-orange-500"
        onClick={onClickRemove}
      >
        <span className="material-symbols-rounded text-2xl text-white">
          delete
        </span>
      </button>
    </div>
  </div>
);

Answer.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickEdit: PropTypes.func,
  onClickRemove: PropTypes.func,
};

export default Answer;
