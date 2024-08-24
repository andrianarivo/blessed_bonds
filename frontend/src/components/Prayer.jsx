import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import Avatar from './Avatar';

import 'swiper/css';
import ShareEditDelete from './ShareEditDelete';

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
  onClickShare = undefined,
  onClickEdit = undefined,
  onClickRemove = undefined,
}) => {
  const cardClass = classNames(
    'card',
    'bg-base-100',
    'border',
    'border-1',
    {
      'w-prayer': !notes || notes.length <= 0,
      'w-full': notes && notes.length > 0,
    },
    {
      'shadow-xl': isLargeDisplay,
      shadow: !isLargeDisplay,
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
          <span className="material-symbols-rounded">more_horiz</span>
        </summary>
        <div className="dropdown-content z-50">
          <ShareEditDelete
            onClickShare={onClickShare}
            onClickEdit={onClickEdit}
            onClickRemove={onClickRemove}
          />
        </div>
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
              onClick={onClickSeeNotes}
            >
              <span className="material-symbols-rounded text-base">
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
                <span className="material-symbols-rounded text-base">
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
                <span className="material-symbols-rounded">event</span>
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
  editor: PropTypes.element,
  onClickSeeNotes: PropTypes.func,
  onClickShare: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickRemove: PropTypes.func,
};

export default Prayer;
