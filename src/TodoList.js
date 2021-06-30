import Todo from './Todo'

const TodoList = ({todos,toggleTodo}) => {
    return (
        todos.map(todo=>{
            return <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id}/>
        })
    )
}

export default TodoList
