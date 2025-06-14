import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Read = (props) => {
    const [todos, settodos] = useContext(todoContext);
    const deleteHandler = (id) => {
        const newTodo = todos.filter((todo) => todo.id != id);
        settodos(newTodo);
        toast.error("Todo deleted!")
    };
    const rendertodos = todos.map((todo, index) => (
        <li className="flex mb-4 items-center justify-between p-2" key={todo.id}>
            <div className="flex-grow text-xl font-thin">{index + 1}. {todo.title}</div>
            <button className="text-sm font-thin text-red-700" onClick={() => deleteHandler(todo.id)}>X</button>
        </li>
    ));
    return (
        <div className="w-[35%] p-10">
            <h1 className='text-5xl font-thin mb-10'> <span className="text-red-400">Pending</span> Todos</h1>
            <ol>{rendertodos}</ol>
        </div>
    )
}

export default Read;
