  import React, { useState } from 'react';
  import TodoForm from './TodoForm';
  import TodoItem from './TodoItem';

  const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    };

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    const startEditTodo = (index) => {
      setEditIndex(index);
      setEditValue(todos[index].text);
    };

    const handleEditChange = (e) => {
      setEditValue(e.target.value);
    };

    const handleEditSubmit = (e) => {
      e.preventDefault();
      const newTodos = [...todos];
      newTodos[editIndex].text = editValue;
      setTodos(newTodos);
      setEditIndex(null);
      setEditValue('');
    };


    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div key={index}>
              {editIndex === index ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                  />
                  <button type="submit">Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </form>
              ) : (
                <TodoItem
                  todo={todo}
                  index={index}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  editTodo={startEditTodo}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default TodoList;
