import React from 'react';
import {
  MDXEditor,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  linkDialogPlugin,
  linkPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  StrikeThroughSupSubToggles,
  ListsToggle,
  CreateLink,
  BlockTypeSelect,
  Separator,
  InsertTable,
  InsertThematicBreak,
} from '@mdxeditor/editor';
import PropTypes from 'prop-types';
import '@mdxeditor/editor/style.css';

const Editor = ({ content, onChange }) => (
  <MDXEditor
    contentEditableClassName="markdown prose"
    markdown={content}
    onChange={onChange}
    plugins={[
      toolbarPlugin({
        toolbarContents: () => (
          <>
            <UndoRedo />
            <Separator />
            <BoldItalicUnderlineToggles />
            <Separator />
            <StrikeThroughSupSubToggles />
            <Separator />
            <ListsToggle />
            <Separator />
            <BlockTypeSelect />
            <Separator />
            <CreateLink />
            <InsertTable />
            <InsertThematicBreak />
            <Separator />
            <div className="flex w-full justify-end">
              <button type="button" className="btn btn-sm text-blue-600">
                <span className="material-symbols-rounded">send</span>
              </button>
            </div>
          </>
        ),
      }),

      headingsPlugin({ allowedHeadingLevels: [3, 4, 5, 6] }),
      listsPlugin(),
      markdownShortcutPlugin(),
      quotePlugin(),
      linkPlugin(),
      linkDialogPlugin(),
      tablePlugin(),
      thematicBreakPlugin(),
    ]}
  />
);

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Editor;
