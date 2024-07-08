import React from 'react';
import PropTypes from 'prop-types';
import Prayer from './Prayer';
import Tag from './Tag';

const PrayerContainer = ({
  tags,
  summary,
  description,
  author,
  noteCount,
  answersCount,
  createdAt,
}) => (
  <Prayer
    header={
      tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag
              label={tag.label}
              backgroundColor={tag.backgroundColor}
              color={tag.color}
              key={tag.label}
            />
          ))}
        </div>
      )
    }
    summary={summary}
    description={description}
    noteCount={noteCount}
    answersCount={answersCount}
    author={author}
    createdAt={createdAt}
  />
);

PrayerContainer.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  noteCount: PropTypes.number,
  answersCount: PropTypes.number,
  createdAt: PropTypes.string,
};

export default PrayerContainer;
