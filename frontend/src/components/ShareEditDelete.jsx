import React from 'react';
import PropTypes from 'prop-types';

const ShareEditDelete = ({
  onClickShare = undefined,
  onClickEdit = undefined,
  onClickRemove = undefined,
}) => (
  <ul className="list-none min-w-max bg-white border border-gray-200 rounded-xl shadow-sm divide-y">
    <li>
      <button
        type="button"
        className="btn btn-ghost grid grid-cols-2 w-full hover:bg-gray-200 hover:rounded-br-none hover:rounded-bl-none"
        onClick={onClickShare}
      >
        <p className="text-start">Share</p>
        <span className="material-symbols-rounded text-end">share</span>
      </button>
    </li>
    <li>
      <button
        type="button"
        className="btn btn-ghost grid grid-cols-2 text-blue-600 w-full hover:bg-blue-600 hover:text-white hover:rounded-none"
        onClick={onClickEdit}
      >
        <p className="text-start">Edit</p>
        <span className="material-symbols-rounded text-end">edit</span>
      </button>
    </li>
    <li>
      <button
        type="button"
        className="btn btn-ghost grid grid-cols-2 text-orange-500 w-full hover:bg-orange-500 hover:text-white hover:rounded-tr-none hover:rounded-tl-none"
        onClick={onClickRemove}
      >
        <p className="text-start">Remove</p>
        <span className="material-symbols-rounded text-end">delete</span>
      </button>
    </li>
  </ul>
);

ShareEditDelete.propTypes = {
  onClickShare: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickRemove: PropTypes.func,
};

export default ShareEditDelete;
