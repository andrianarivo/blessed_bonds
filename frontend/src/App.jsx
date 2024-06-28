import './App.css';
import Tag from './components/Tag';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Hello world?</h1>

      <div className="flex">
        <Tag label="Finance" backgroundColor="#ffece1" color="#ff5c00" />
      </div>
    </div>
  );
}

export default App;
