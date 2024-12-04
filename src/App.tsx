import { Button } from './components/ui/button'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </>
  )
}

export default App
