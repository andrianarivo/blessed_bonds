/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import {
  createEditor,
  Editor as SlateEditor,
  Element,
  Transforms,
} from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import CodeElement from './CodeElement';
import DefaultElement from './DefaultElement';
import BoldLeaf from './BoldLeaf';
import CodeLeaf from './CodeLeaf';
import DefaultLeaf from './DefaultLeaf';

const Editor = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];

  const renderElement = useCallback((args) => {
    switch (args.element.type) {
      case 'code':
        return <CodeElement {...args} />;
      default:
        return <DefaultElement {...args} />;
    }
  }, []);

  const renderLeaf = useCallback((args) => {
    if (args.leaf.bold) {
      return <BoldLeaf {...args} />;
    }
    if (args.leaf.code) {
      return <CodeLeaf {...args} />;
    }
    return <DefaultLeaf {...args} />;
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case '`': {
              event.preventDefault();
              const [match] = SlateEditor.nodes(editor, {
                match: (n) => n.type === 'code',
              });
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                {
                  match: (n) =>
                    Element.isElement(n) && SlateEditor.isBlock(editor, n),
                }
              );
              break;
            }

            case 'b': {
              event.preventDefault();
              SlateEditor.addMark(editor, 'bold', true);
              break;
            }

            case 'p': {
              event.preventDefault();
              SlateEditor.addMark(editor, 'code', true);
              break;
            }

            default: {
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

Editor.propTypes = {};

export default Editor;
