import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import classNames from 'classnames';
import moment from 'moment';
import Avatar from './Avatar';

const Note = ({
  title,
  content,
  createdAt,
  iconUrl = undefined,
  author = 'anonymous',
  isOwn = false,
}) => {
  const chatClass = classNames('chat', {
    'chat-end': isOwn,
    'chat-start': !isOwn,
  });
  const chatFooterClass = classNames(
    'chat-footer',
    'text-gray-400',
    'flex',
    'justify-between',
    'items-center',
    {
      'flex-row-reverse': isOwn,
    },
    'gap-3'
  );

  return (
    <div className={chatClass}>
      <Avatar className="chat-image" iconUrl={iconUrl} author={author} />
      <div className="chat-bubble bg-gray-200 text-gray-500 max-w-max">
        <div className="flex justify-between">
          <h3 className="text-black font-medium">{title}</h3>
          <span className="material-symbols-outlined text-base">
            description
          </span>
        </div>
        <Markdown className="text-sm max-w-[90%]">{content}</Markdown>
      </div>
      <div className={chatFooterClass}>
        <button className="link" type="button">
          ~ {moment(createdAt).from(moment())} | {isOwn ? 'You' : author}
        </button>
        <div className="rounded w-[3px] h-[3px] bg-gray-500" />
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
              className="btn btn-ghost btn-sm font-normal text-sm capitalize hover:text-black hover:bg-gray-200 hover:rounded-tr-none hover:rounded-tl-none"
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
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  author: PropTypes.string,
  isOwn: PropTypes.bool,
};

export default Note;
