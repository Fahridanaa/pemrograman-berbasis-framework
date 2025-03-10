import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo }]);
            setNewTodo('');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    );
}

function TodoItem({ todo, removeTodo }) {
    return (
        <li>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    );
}

export default TodoList;
