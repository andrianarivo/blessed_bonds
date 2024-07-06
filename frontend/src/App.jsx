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
          text="It was said that you would, destroy the Sith, not join them."
          iconUrl="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div>
  );
}

export default App;
