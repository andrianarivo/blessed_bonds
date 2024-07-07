import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const getAvatar = (name) => {
  const avatar = createAvatar(adventurer, {
    seed: name,
  });

  return avatar.toString();
};

const hashStringToInt = (s) => {
  let hash = 0;
  for (let i = 0; i < s.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

const intToRGB = (i) => {
  // eslint-disable-next-line no-bitwise
  const c = (i & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - c.length) + c;
};

const getColor = (name) => {
  const hash = hashStringToInt(name);
  const color = intToRGB(hash);
  return `#${color}`;
};

function Note({ title, text, iconUrl = undefined, author = 'unknown' }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div
          className="w-10 rounded-full"
          style={{
            backgroundColor: !iconUrl ? getColor(author) : undefined,
          }}
        >
          <img
            alt={`${author} profile`}
            src={
              iconUrl ||
              `data:image/svg+xml;utf8,${encodeURIComponent(getAvatar(author))}`
            }
          />
        </div>
      </div>
      <div className="chat-bubble bg-gray-200 text-gray-500">
        <div className="flex justify-between">
          <h3 className="text-black font-medium">{title}</h3>
          <span className="material-symbols-outlined">description</span>
        </div>
        <Markdown className="text-sm">{text}</Markdown>
      </div>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  author: PropTypes.string,
};

export default Note;
