const Read = (props) => {
    const todos = props.todos;
    const rendertodos = todos.map(todo => <li key={todo.id}> {todo.title} </li>)
    return (
        <>
            <h1>Pending Todos</h1>
            <ol>{rendertodos}</ol>
        </>
    )
}

export default Read
