import './App.css';
import React from 'react';
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
import Logo from './components/Logo';
import Navbar from './components/Navbar';

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

  const answerContainerClass = classNames(
    { 'w-96': answers.length > 0 },
    { 'w-42': answers.length <= 0 }
  );

  return (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content w-full min-h-full flex flex-col justify-center items-center gap-4">
        <Navbar
          hamburger={
            <label htmlFor="app-drawer" className="btn btn-ghost drawer-button">
              <span className="material-symbols-outlined text-gray-400">
                menu
              </span>
              <input hidden type="checkbox" />
            </label>
          }
        />

        <div className="w-2/3">
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

      <div className="drawer-side z-50">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input hidden type="checkbox" />
        </label>
        <Sidebar classNames="flex flex-col justify-between">
          <div className="divide-y-2">
            <div className="flex justify-between items-center">
              <Logo />
            </div>
            <MenuSection>
              <MenuItem icon="action_key" />
              <MenuItem icon="priority" title="answers" />
              <MenuItem icon="wysiwyg" title="notes" />
            </MenuSection>
            <MenuSection title="my topics" canAddMore>
              <MenuItem title="Career" color="#7ac554" useDot active />
              <MenuItem title="Ministry" color="#f7a501" useDot />
            </MenuSection>
          </div>
          <div className="flex justify-center items-center">
            <FlashMessage />
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default App;
