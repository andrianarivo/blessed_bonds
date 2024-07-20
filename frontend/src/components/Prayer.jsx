import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import Avatar from './Avatar';

const Prayer = ({
  summary,
  description,
  createdAt,
  iconUrl = undefined,
  noteCount = 0,
  answersCount = 0,
  tags = [],
  notes = [],
  author = 'anonymous',
  renderTags = undefined,
  renderNotes = undefined,
  renderEditor = undefined,
  onClickSeeAnswers = undefined,
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

  const isLargeDisplay =
    renderNotes && Array.isArray(notes) && notes.length > 0;

  return (
    <div className={cardClass}>
      <div className="w-1 h-16 bg-indigo-600 absolute top-14 -left-[2px] rounded" />
      <div className="card-body p-5">
        <div className="flex flex-wrap gap-2">
          {renderTags &&
            Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((tag, idx) => renderTags(tag, idx))}
        </div>
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
              {`${noteCount} notes`}
            </button>
            <button
              className="btn btn-ghost btn-sm font-normal hover:text-black"
              type="button"
              onClick={onClickSeeAnswers}
            >
              <span className="material-symbols-outlined text-base">
                mark_email_read
              </span>
              {`${answersCount} answers`}
            </button>
          </div>
          <div className="divider my-0" />
          {isLargeDisplay && (
            <div className="w-full">
              <div>{notes.map((note, idx) => renderNotes(note, idx))}</div>
              <div className="my-4">{renderEditor && renderEditor()}</div>
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
                  <button
                    type="button"
                    className="link btn-small text-lg text-gray-500 font-normal mr-4"
                    onClick={onClickSeeAnswers}
                  >
                    See answers
                  </button>

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
  noteCount: PropTypes.number,
  answersCount: PropTypes.number,
  author: PropTypes.string,
  iconUrl: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      isPrivate: PropTypes.bool,
    })
  ),
  renderTags: PropTypes.func,
  renderNotes: PropTypes.func,
  renderEditor: PropTypes.func,
  onClickSeeAnswers: PropTypes.func,
  onClickSeeNotes: PropTypes.func,
};

export default Prayer;
