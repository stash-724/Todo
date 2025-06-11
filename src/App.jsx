import { useState } from 'react';
import Read from './components/Read';
import Create from './components/Create';

const App = () => {
  const [todos, settodos] = useState([{ id: 1, title: "Complete Maths for cp", isCompleted: false }]);
  return (
    <div className='text-white w-screen h-screen bg-zinc-900 flex p-10'>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  )
}

export default App
