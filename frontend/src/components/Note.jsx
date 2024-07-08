import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import classNames from 'classnames';
import moment from 'moment';
import { getColorFromName } from '../utils/colors';
import getAvatar from '../utils/avatar';

const Note = ({
  title,
  text,
  createdAt,
  iconUrl = undefined,
  author = 'anonymous',
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
            backgroundColor: !iconUrl ? getColorFromName(author) : undefined,
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
