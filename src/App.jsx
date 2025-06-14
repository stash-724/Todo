import Read from './components/Read';
import Create from './components/Create';

const App = () => {
  return (
    <div className='text-white w-screen h-screen bg-zinc-900 flex p-10'>
      <Create/>
      <Read/>
    </div>
  )
}

export default App
