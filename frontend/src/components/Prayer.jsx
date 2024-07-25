import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from './Avatar';
import SwiperPrevButton from './swipper/SwiperPrevButton';
import SwiperNextButton from './swipper/SwiperNextButton';

import 'swiper/css';

const Prayer = ({
  summary,
  description,
  createdAt,
  iconUrl = undefined,
  noteCount = 0,
  answersCount = 0,
  tags = [],
  notes = [],
  answers = [],
  author = 'anonymous',
  renderTags = undefined,
  renderNotes = undefined,
  renderAnswers = undefined,
  renderEditor = undefined,
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

  const dropdownClass = classNames('dropdown', 'dropdown-end', {
    'dropdown-top': !isLargeDisplay,
  });

  const dropdownContentClass = classNames(
    'dropdown-content',
    'z-50',
    'p-2',
    'bg-gray-400-blur',
    'backdrop-blur-md',
    'rounded-xl',
    {
      'w-96': Array.isArray(answers) && answers.length > 0,
    },
    {
      'w-48':
        !Array.isArray(answers) ||
        (Array.isArray(answers) && answers.length <= 0),
    }
  );

  const swiperCtaClass = classNames('flex', 'justify-between', 'my-2', {
    invisible:
      !Array.isArray(answers) ||
      (Array.isArray(answers) && answers.length <= 0),
  });

  const renderAnswersList = () => (
    <div className={dropdownContentClass}>
      {Array.isArray(answers) && answers.length > 0 ? (
        <Swiper slidesPerView={1}>
          {renderAnswers &&
            answers.map((answer, index) => (
              <SwiperSlide key={answer.id}>
                {renderAnswers(answer, index)}
              </SwiperSlide>
            ))}
          <div className={swiperCtaClass}>
            <SwiperPrevButton />
            <div className="flex gap-2">
              <button type="button" className="btn btn-circle bg-blue-600">
                <span className="material-symbols-outlined text-2xl text-white">
                  edit
                </span>
              </button>
              <button type="button" className="btn btn-circle bg-orange-500">
                <span className="material-symbols-outlined text-2xl text-white">
                  delete
                </span>
              </button>
            </div>
            <SwiperNextButton />
          </div>
        </Swiper>
      ) : (
        <p className="text-center">Nothing to show here...</p>
      )}
    </div>
  );

  return (
    <div className={cardClass}>
      <div className="w-1 h-16 bg-indigo-600 absolute top-14 -left-[2px] rounded" />
      <div className="card-body p-5">
        <ul className="flex flex-wrap gap-2">
          {renderTags &&
            Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((tag) => <li key={tag.id}>{renderTags(tag)}</li>)}
        </ul>
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
              {renderAnswersList()}
            </div>
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
                  <div className="dropdown dropdown-top dropdown-end">
                    <div
                      tabIndex="0"
                      role="button"
                      className="link btn-small text-lg text-gray-700 font-extralight mr-4 underline-offset-4 decoration-1"
                    >
                      See answers
                    </div>
                    {renderAnswersList()}
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
  noteCount: PropTypes.number,
  answersCount: PropTypes.number,
  author: PropTypes.string,
  iconUrl: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      isPrivate: PropTypes.bool,
    })
  ),
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
  renderTags: PropTypes.func,
  renderNotes: PropTypes.func,
  renderAnswers: PropTypes.func,
  renderEditor: PropTypes.func,
  onClickSeeNotes: PropTypes.func,
};

export default Prayer;
