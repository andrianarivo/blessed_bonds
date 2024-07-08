import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import classNames from 'classnames';
import moment from 'moment';

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
  let c = (i & 0x00ffffff).toString(16).toUpperCase();
  c = '00000'.substring(0, 6 - c.length) + c;

  // Ensure the colors are bright by increasing the RGB values
  let r = parseInt(c.substring(0, 2), 16);
  let g = parseInt(c.substring(2, 4), 16);
  let b = parseInt(c.substring(4, 6), 16);

  // Adjust RGB values to ensure brightness
  r = Math.min(r + 100, 255);
  g = Math.min(g + 100, 255);
  b = Math.min(b + 100, 255);

  // Convert back to hex and return
  // eslint-disable-next-line no-bitwise
  return ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase();
};

const getColor = (name) => {
  const hash = hashStringToInt(name);
  const color = intToRGB(hash);
  return `#${color}`;
};

const Note = ({
  title,
  text,
  createdAt,
  iconUrl = undefined,
  author = 'unknown',
  isOwn = false,
}) => {
  const chatClass = classNames('chat', {
    'chat-end': isOwn,
    'chat-start': !isOwn,
  });
  return (
    <div className={chatClass}>
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
      <div className="chat-bubble bg-gray-200 text-gray-500 max-w-max">
        <div className="flex justify-between">
          <h3 className="text-black font-medium">{title}</h3>
          <span className="material-symbols-outlined text-base">
            description
          </span>
        </div>
        <Markdown className="text-sm max-w-[90%]">{text}</Markdown>
      </div>
      <div className="chat-footer text-gray-400 w-full flex justify-between items-center underline">
        <div>{moment(createdAt).from(moment())}</div>
        {isOwn ? (
          <div>
            <button
              className="btn btn-ghost btn-sm font-normal text-sm capitalize hover:text-black hover:bg-gray-200 hover:rounded-tr-none hover:rounded-tl-none"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">edit</span>
              edit
            </button>
            <button
              className="btn btn-ghost btn-sm font-normal text-sm capitalize hover:text-black hover:bg-gray-200 hover:rounded-tr-none hover:rounded-tl-none"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">delete</span>
              remove
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-ghost btn-sm font-normal text-sm capitalize hover:text-black hover:bg-gray-200 hover:rounded-tr-none hover:rounded-tl-none"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">
                quickreply
              </span>
              private reply
            </button>
            <button
              className="btn btn-ghost btn-sm font-normal text-sm capitalize hover:text-black hover:bg-gray-200 hover:rounded-tl-none"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">reply</span>
              reply
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  author: PropTypes.string,
  isOwn: PropTypes.bool,
};

export default Note;
