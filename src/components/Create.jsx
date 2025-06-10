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
        <>
            <h1>Create Task</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    type="text"
                />
                <br />
                <button>Create Todo</button>
                <br />
            </form>
        </>
    );
};

export default Create;
