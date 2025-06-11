import { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = (props) => {
    
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false,
        };
        settodos([...todos, newtodo]);
        settitle("");
    };

    return (
        <div className='p-10 w-[65%] border rounded'>
            <h1 className='text-5xl font-thin mb-10'>Set <span className='text-red-400'>Reminders</span> for Tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    className='p-2 border-b w-[100%] font-thin text-2xl outline-0 mb-10'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    placeholder='title'
                    type="text"
                />
                <br />
                <button className='text-xl px-10 py-2 border rounded'>Create Todo</button>
                <br />
            </form>
        </div>
    );  
};

export default Create;
