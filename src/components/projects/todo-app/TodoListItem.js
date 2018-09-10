import React from 'react';

const TodoListItem = ({ todo, onTodoCheck }) => {

  const handleChange = event => {
    if (event.target.checked) {
      onTodoCheck(todo.id);
    }
  };
  
  return (
    <li className="todo-list-item">
      <input type="checkbox" onChange={handleChange} />
      <span className="item">{todo.description}</span>
    </li>
  );
};

export default TodoListItem;
