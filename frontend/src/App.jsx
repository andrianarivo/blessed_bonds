import './App.css';
import React, { useState } from 'react';
import classNames from 'classnames';
import Tag from './components/Tag';
import Note from './components/Note';
import Prayer from './components/Prayer';
import Answer from './components/Answer';
import TagRow from './components/TagRow';
import AnswerContainer from './components/AnswerContainer';
import AnswerCarousel from './components/AnswerCarousel';
import NoteBox from './components/NoteBox';
import MarkdownEditor from './components/MarkdownEditor';
import MenuItem from './components/MenuItem';
import MenuSection from './components/MenuSection';
import FlashMessage from './components/FlashMessage';
import Sidebar from './components/Sidebar';
import logo from './assets/logo.jpg';

const tags = [
  {
    id: 1,
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
  {
    id: 2,
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b4',
  },
];

const notes = [
  {
    id: 1,
    title: 'I hear the Gospel in my dreams',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Jesus is the Messiah',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];

const answers = [
  {
    id: 1,
    title: 'Be patient ⏰',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque. ',
  },
  {
    id: 2,
    title: 'Gear up ⚙️',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
  },
];

const App = () => {
  const [markdown, setMarkdown] = React.useState(
    '### Note Title\nWrite a note...'
  );

  const [isMenuLarge, setMenuLarge] = useState(true);

  const answerContainerClass = classNames(
    { 'w-96': answers.length > 0 },
    { 'w-42': answers.length <= 0 }
  );

  const containerClass = classNames(
    'p-4',
    { 'ml-menulg': isMenuLarge },
    { 'ml-menusm': !isMenuLarge }
  );

  const handleOnClickToogleMenuDisplay = () => {
    setMenuLarge(!isMenuLarge);
  };

  return (
    <div className="flex justify-center min-h-full">
      <Sidebar large={isMenuLarge}>
        <div className="divide-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 m-4">
              <img className="w-8 h-8 rounded-full" src={logo} alt="logo" />
              {isMenuLarge && (
                <p className="text-purple-800 text-lg font-medium line-clamp-1">
                  Prayer Dom
                </p>
              )}
            </div>
            {isMenuLarge && (
              <button
                onClick={handleOnClickToogleMenuDisplay}
                type="button"
                className="btn btn-ghost btn-sm"
              >
                <span className="material-symbols-outlined text-gray-400">
                  keyboard_double_arrow_left
                </span>
              </button>
            )}
          </div>
          <MenuSection large={!isMenuLarge}>
            <MenuItem icon="action_key" large={!isMenuLarge} />
            <MenuItem icon="priority" title="answers" large={!isMenuLarge} />
            <MenuItem icon="wysiwyg" title="notes" large={!isMenuLarge} />
          </MenuSection>
          <MenuSection title="my topics" canAddMore large={!isMenuLarge}>
            <MenuItem
              title="Career"
              color="#7ac554"
              useDot
              active
              large={!isMenuLarge}
            />
            <MenuItem
              title="Ministry"
              color="#f7a501"
              useDot
              large={!isMenuLarge}
            />
          </MenuSection>
        </div>
        <div className="absolute bottom-0 left-0 m-4">
          {isMenuLarge ? (
            <FlashMessage />
          ) : (
            <button
              onClick={handleOnClickToogleMenuDisplay}
              type="button"
              className="btn btn-ghost btn-sm"
            >
              <span className="material-symbols-outlined text-gray-400">
                keyboard_double_arrow_right
              </span>
            </button>
          )}
        </div>
      </Sidebar>

      <div className={containerClass}>
        <Prayer
          summary="God is provider"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat."
          isLargeDisplay
          noteCount={2}
          answersCount={2}
          author="David Stanley"
          createdAt="2021-09-01T00:00:00.000Z"
          tags={
            <TagRow>
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  label={tag.label}
                  backgroundColor={tag.backgroundColor}
                  color={tag.color}
                />
              ))}
            </TagRow>
          }
          notes={
            <NoteBox>
              {notes.map((note, idx) => (
                <Note
                  key={note.id}
                  title={note.title}
                  content={note.content}
                  createdAt={note.createdAt}
                  author={note.author}
                  isOwn={idx % 2 === 0}
                />
              ))}
            </NoteBox>
          }
          answers={
            <AnswerContainer className={answerContainerClass}>
              {answers.length > 0 ? (
                <AnswerCarousel>
                  {answers.map((answer) => (
                    <Answer
                      key={answer.id}
                      title={answer.title}
                      content={answer.content}
                    />
                  ))}
                </AnswerCarousel>
              ) : (
                <p>No answers yet</p>
              )}
            </AnswerContainer>
          }
          editor={
            <MarkdownEditor
              author="David Stanley"
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
          }
        />
      </div>
    </div>
  );
};

export default App;
