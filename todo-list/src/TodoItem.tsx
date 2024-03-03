import React, { useState } from 'react';


interface item {
    id: number;
    text: string;
    completed: boolean;
}


export const TodoList: React.FC = () => {

    const [todos, setTodos] = useState<item[]>([
        {id: 1, text:'test', completed: true},
        {id: 2, text:'test', completed: true},
        {id: 3, text:'test', completed: true}
    ])

    const handleToggle = (id:number) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        )
    }

    return (
        <div className="todo-container">
            <h1>Todo List Items</h1>
            <ul>
                {todos.map((todo) =>(
                    <li key={todo.id} onClick={() => handleToggle(todo.id)}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}