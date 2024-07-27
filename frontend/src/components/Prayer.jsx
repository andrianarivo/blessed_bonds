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
  onClickSeeNotes = undefined,
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

  return (
    <div className={cardClass}>
      <div className="w-1 h-16 bg-indigo-600 absolute top-14 -left-[2px] rounded" />
      <div className="card-body p-5">
        {tags}
        <h2 className="card-title">{summary}</h2>
        <p className={descriptionClass}>{description}</p>
        <div className="card-actions flex-col">
          <div className="flex justify-end gap-2 w-full text-gray-500">
            <button
              className="btn btn-ghost btn-sm font-normal hover:text-black"
              type="button"
              onClick={onClickSeeNotes}
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
          <div className="divider my-0" />
          {isLargeDisplay && (
            <div className="w-full gap-4">
              {notes}
              {editor}
            </div>
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
  onClickSeeNotes: PropTypes.func,
};

export default Prayer;
