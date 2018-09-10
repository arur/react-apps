import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleTodoCheck }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length ? (
        todos.map(todo => (
          <TodoListItem
            key={todo.id}
            onTodoCheck={handleTodoCheck}
            todo={todo}
          />
        ))
      ) : (
        <p>Nothing to display</p>
      )}
    </ul>
  );
};

export default TodoList;
