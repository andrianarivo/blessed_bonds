import React from 'react';
import PropTypes from 'prop-types';

function Note({ text, iconUrl }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="author url of the note" src={iconUrl} />
        </div>
      </div>
      <div className="chat-bubble bg-gray-200 text-gray-500">{text}</div>
    </div>
  );
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default Note;
