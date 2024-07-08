import './App.css';
import Tag from './components/Tag';
import Note from './components/Note';

const App = () => (
  <div className="flex flex-col justify-center items-center gap-y-4">
    <h1 className="text-2xl my-6">Playground phase</h1>
    <div className="flex">
      <Tag label="Finance" backgroundColor="#ffece1" color="#ff5c00" />
    </div>

    <div className="w-1/2">
      <Note
        title="I hear the Gospel in my dreams"
        text="# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. "
        author="David Stanley"
        isOwn={false}
        createdAt="2021-09-01T00:00:00.000Z"
      />
    </div>
  </div>
);

export default App;
