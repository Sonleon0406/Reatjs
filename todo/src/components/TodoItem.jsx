import React from 'react';

const TodoItem = ({ todo, index, removeTodo, editTodo }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        
        <button onClick={() => removeTodo(index)}>Delete</button>
        <button onClick={() => editTodo(index)}>Edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
