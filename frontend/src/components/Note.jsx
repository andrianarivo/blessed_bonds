import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

function Note({ title, text, iconUrl, author }) {
  const getInitials = (name) => {
    const names = name.split(' ');
    return names
      .toSpliced(1, names.length - 2)
      .reduce((acc, name) => acc + name[0], '');
  };

  const getColor = (name) => {
    const colors = [
      '#ff5c00',
      '#ffbb00',
      '#fde047',
      '#48bb78',
      '#2b6cb0',
      '#f472b6',
      '#ed64a6',
    ];

    const charCodes = name.split('').map((char) => char.charCodeAt(0));
    const sum = charCodes.reduce((acc, code) => acc + code, 0);
    return colors[sum % colors.length];
  };

  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div
          className="w-10 rounded-full"
          style={
            !iconUrl
              ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: getColor(author),
                }
              : undefined
          }
        >
          {iconUrl ? (
            <img alt={`${author} profile`} src={iconUrl} />
          ) : (
            <p className="font-bold text-white">{getInitials(author)}</p>
          )}
        </div>
      </div>
      <div className="chat-bubble bg-gray-200 text-gray-500">
        <h3 className="text-black font-medium">{title}</h3>
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

Note.defaultProps = {
  iconUrl: undefined,
  author: 'UN',
};

export default Note;
