import { fn } from '@storybook/test';

import Prayer from '../components/Prayer';
import Tag from '../components/Tag';
import Note from '../components/Note';
import Answer from '../components/Answer';
import TagRow from '../components/TagRow';
import Carousel from '../components/Carousel';
import NoteBox from '../components/NoteBox';
import MarkdownEditor from '../components/MarkdownEditor';
import BlurBackground from '../components/BlurBackground';

import { Note1, Note2 } from './Note.stories';
import { Answer1, Answer2 } from './Answer.stories';
import { Tag1, Tag2 } from './Tag.stories';

export default {
  title: 'Playground/Prayer',
  component: Prayer,
  subcomponents: { Tag, Note, Answer },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    createdAt: { control: 'date' },
    notes: { table: { disable: true } },
    answers: { table: { disable: true } },
    tags: { table: { disable: true } },
    editor: { table: { disable: true } },
    onClickSeeNotes: { table: { disable: true } },
    onClickEdit: { table: { disable: true } },
    onClickRemove: { table: { disable: true } },
    onClickShare: { table: { disable: true } },
  },
};

export const Expanded = {
  render: (args) => (
    <Prayer
      tags={
        <TagRow>
          <Tag {...Tag1.args} />
          <Tag {...Tag2.args} />
        </TagRow>
      }
      answers={
        <BlurBackground className="w-96">
          <Carousel>
            <Answer {...Answer1.args} />
            <Answer {...Answer2.args} />
          </Carousel>
        </BlurBackground>
      }
      notes={
        <NoteBox>
          <Note {...Note1.args} />
          <Note {...Note2.args} />
        </NoteBox>
      }
      editor={
        <MarkdownEditor
          author={args.author}
          markdown={'### Note Title\nWrite a note...'}
        />
      }
      {...args}
    />
  ),
  args: {
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    notesCount: 2,
    answersCount: 2,
    author: 'David Stanley',
    isLargeDisplay: true,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
};

export const Collapsed = {
  render: (args) => (
    <Prayer
      answers={
        <BlurBackground className="w-48">
          <p>No answers yet...</p>
        </BlurBackground>
      }
      tags={
        <TagRow>
          <Tag {...Tag1.args} />
          <Tag {...Tag2.args} />
        </TagRow>
      }
      {...args}
    />
  ),
  args: {
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 0,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
    onClickSeeNotes: fn(),
    onClickShare: fn(),
    onClickEdit: fn(),
    onClickRemove: fn(),
  },
};
