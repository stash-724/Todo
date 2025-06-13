import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form'; 
import { toast } from 'react-toastify';

const Create = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const submitHandler = (data) => {
        data.id = nanoid();
        data.isCompleted = false;
        const copyTodos = [...todos, data];
        settodos(copyTodos);
        reset();
        toast.success('Todo Create Successfully');
    };

    return (
        <div className='p-10 w-[65%] border rounded'>
            <h1 className='text-5xl font-thin mb-10'>Set <span className='text-red-400'>Reminders</span> for Tasks</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input
                    {...register("title", {required: "Title cannot be empty"})}
                    className='p-2 border-b w-[100%] font-thin text-2xl outline-0'
                    placeholder='title'
                    type='text'
                />
                <small className='font-thin text-red-400'>{errors?.title?.message}</small>
                <br />
                <button className='text-xl px-10 py-2 border rounded mt-10'>Create Todo</button>
                <br />
            </form>
        </div>
    );
};

export default Create;
