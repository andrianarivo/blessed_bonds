import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Editor from './Editor';

const MarkdownEditor = ({ author = 'anonymous', markdown, setMarkdown }) => (
  <div className="flex gap-3">
    <Avatar author={author} className="self-end" size="lg" />
    <div className="flex-1 overflow-scroll">
      <Editor content={markdown} onChange={setMarkdown} />
    </div>
  </div>
);

MarkdownEditor.propTypes = {
  author: PropTypes.string,
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func,
};

export default MarkdownEditor;
