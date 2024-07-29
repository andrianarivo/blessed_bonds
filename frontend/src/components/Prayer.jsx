import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import Avatar from './Avatar';

import 'swiper/css';

const Prayer = ({
  summary,
  description,
  createdAt,
  iconUrl = undefined,
  isLargeDisplay = false,
  notesCount = 0,
  answersCount = 0,
  author = 'anonymous',
  tags = null,
  notes = null,
  answers = null,
  editor = null,
  onSeeNotes = undefined,
  onShare = undefined,
  onEdit = undefined,
  onRemove = undefined,
}) => {
  const cardClass = classNames(
    'card',
    'bg-base-100',
    'shadow-xl',
    'border',
    'border-1',
    {
      'w-96': !notes || notes.length <= 0,
      'w-full': notes && notes.length > 0,
    }
  );

  const descriptionClass = classNames('text-gray-400', {
    'line-clamp-4': !notes || notes.length <= 0,
  });

  const dropdownClass = classNames('dropdown', 'dropdown-end', {
    'dropdown-top': !isLargeDisplay,
  });

  const decorationClass = classNames(
    'w-1',
    'h-16',
    'bg-indigo-600',
    'absolute',
    'top-14',
    '-left-[2px]',
    'rounded',
    {
      invisible: !isLargeDisplay,
    }
  );

  const moreActionClass = classNames('btn', 'btn-ghost', 'btn-sm', {
    invisible: isLargeDisplay,
  });

  return (
    <div className={cardClass}>
      <div className={decorationClass} />
      <details className="dropdown dropdown-end absolute top-4 right-2">
        <summary type="button" className={moreActionClass}>
          <span className="material-symbols-outlined">more_horiz</span>
        </summary>
        <ul className="dropdown-content list-none min-w-max bg-white border border-gray-200 rounded-xl shadow-sm divide-y">
          <li>
            <button
              type="button"
              className="btn btn-ghost grid grid-cols-2 w-full hover:bg-gray-200 hover:rounded-br-none hover:rounded-bl-none"
              onClick={onShare}
            >
              <p className="text-start">Share</p>
              <span className="material-symbols-outlined text-end">share</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-ghost grid grid-cols-2 text-blue-600 w-full hover:bg-blue-600 hover:text-white hover:rounded-none"
              onClick={onEdit}
            >
              <p className="text-start">Edit</p>
              <span className="material-symbols-outlined text-end">edit</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-ghost grid grid-cols-2 text-orange-500 w-full hover:bg-orange-500 hover:text-white hover:rounded-tr-none hover:rounded-tl-none"
              onClick={onRemove}
            >
              <p className="text-start">Remove</p>
              <span className="material-symbols-outlined text-end">delete</span>
            </button>
          </li>
        </ul>
      </details>
      <div className="card-body p-5">
        {tags}
        <h2 className="card-title">{summary}</h2>
        <p className={descriptionClass}>{description}</p>
        <div className="card-actions flex-col">
          <div className="flex justify-end gap-2 w-full text-gray-500">
            <button
              className="btn btn-ghost btn-sm font-normal hover:text-black"
              type="button"
              onClick={onSeeNotes}
            >
              <span className="material-symbols-outlined text-base">
                description
              </span>
              {`${notesCount} notes`}
            </button>
            <div className={dropdownClass}>
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-sm font-normal hover:text-black"
              >
                <span className="material-symbols-outlined text-base">
                  mark_email_read
                </span>
                {`${answersCount} answers`}
              </div>
              <div className="dropdown-content z-50">{answers}</div>
            </div>
          </div>

          {isLargeDisplay && (
            <>
              <div className="divider my-0" />
              <div className="w-full gap-4">
                {notes}
                {editor}
              </div>
            </>
          )}

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Avatar author={author} iconUrl={iconUrl} />
              {author}
            </div>
            <div className="flex items-center">
              {isLargeDisplay && (
                <>
                  <div className="dropdown dropdown-top dropdown-end">
                    <div
                      tabIndex="0"
                      role="button"
                      className="link btn-small text-lg text-gray-700 font-extralight mr-4 underline-offset-4 decoration-1"
                    >
                      See answers
                    </div>
                    <div className="dropdown-content z-50">{answers}</div>
                  </div>

                  <div className="rounded w-[3px] h-[3px] bg-gray-500" />
                </>
              )}
              <div className="flex items-center gap-2 text-gray-500 ml-4">
                <span className="material-symbols-outlined">event</span>
                {moment(createdAt).format('ll')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Prayer.propTypes = {
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isLargeDisplay: PropTypes.bool,
  notesCount: PropTypes.number,
  answersCount: PropTypes.number,
  author: PropTypes.string,
  iconUrl: PropTypes.string,
  tags: PropTypes.element,
  notes: PropTypes.element,
  answers: PropTypes.element,
  editor: PropTypes.func,
  onSeeNotes: PropTypes.func,
  onShare: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Prayer;
