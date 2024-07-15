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
  UndoRedo,
  BoldItalicUnderlineToggles,
  StrikeThroughSupSubToggles,
  ListsToggle,
  CreateLink,
  BlockTypeSelect,
  Separator,
} from '@mdxeditor/editor';

const Editor = () => (
  <MDXEditor
    contentEditableClassName="markdown prose"
    markdown="* Hello world"
    plugins={[
      toolbarPlugin({
        toolbarContents: () => (
          <>
            {' '}
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
          </>
        ),
      }),

      headingsPlugin(),
      listsPlugin(),
      markdownShortcutPlugin(),
      quotePlugin(),
      linkPlugin(),
      linkDialogPlugin(),
    ]}
  />
);

Editor.propTypes = {};

export default Editor;
