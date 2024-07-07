import './App.css';
import Tag from './components/Tag';
import Note from './components/Note';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world?</h1>

      <div className="flex">
        <Tag label="Finance" backgroundColor="#ffece1" color="#ff5c00" />
      </div>

      <div className="flex">
        <Note
          title="I hear the Gospel in my dreams"
          text="# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. "
          author="David Stanley"
        />
      </div>
    </div>
  );
}

export default App;
