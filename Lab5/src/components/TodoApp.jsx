import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [editingTodo, setEditingTodo] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');

    useEffect(() => {
        fetchTodos();
    }, [page, searchQuery]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/todos', {
                params: { search: searchQuery, page }
            });
            setTodos(response.data.todos || []);
            setTotalPages(response.data.totalPages || 1);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async () => {
        try {
            const response = await axios.post('http://localhost:5000/todos', { title });
            setTodos([...todos, response.data]);
            setTitle('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const updateTodo = async (id, updatedTodo) => {
        try {
            const response = await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo);
            setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setPage(1); 
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const startEditing = (todo) => {
        setEditingTodo(todo);
        setUpdatedTitle(todo.title);
    };

    const cancelEditing = () => {
        setEditingTodo(null);
        setUpdatedTitle('');
    };

    const saveTodo = async () => {
        try {
            const updatedTodo = { ...editingTodo, title: updatedTitle };
            await updateTodo(editingTodo._id, updatedTodo);
            setEditingTodo(null);
            setUpdatedTitle('');
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="input-group">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <div className="input-group">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search todos"
                />
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        {editingTodo && editingTodo._id === todo._id ? (
                            <div className="editing">
                                <input
                                    type="text"
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                />
                                <button onClick={saveTodo}>Save</button>
                                <button onClick={cancelEditing}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                {todo.title}
                                <button onClick={() => startEditing(todo)}>Edit</button>
                                <button onClick={() => updateTodo(todo._id, { ...todo, completed: !todo.completed })}>
                                    {todo.completed ? 'chưa hoàn thành' : 'hoàn thành'}
                                </button>
                                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={page === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TodoApp;
