import React from 'react';
import DeleteButton from '../Buttons/DeleteButton';

function TodoList({ todos, onDelete }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">
                    <span>{todo.text}</span>
                    <DeleteButton onClick={() => onDelete(todo.id)} />
                </li>
            ))}
        </ul>
    );
}

export default TodoList;