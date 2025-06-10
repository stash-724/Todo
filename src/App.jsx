import { useState } from 'react';
import Read from './components/Read';
import Create from './components/Create';

const App = () => {
  const [todos, settodos] = useState([{ id: 1, title: "Complete Maths for cp", isCompleted: false }]);
  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </>
  )
}

export default App
