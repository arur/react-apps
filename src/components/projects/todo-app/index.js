import React, { Component } from 'react';
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';
import './todo-app.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          description: 'Add new todo'
        }
      ],
      // the counter will be incremented to serve as an id for a new todo
      counter: 0
    };

    this.handleTodoAddition = this.handleTodoAddition.bind(this);
    this.handleTodoCheck = this.handleTodoCheck.bind(this);
  }

  handleTodoAddition(description) {
    this.setState(prevState => {
      const id = prevState.counter + 1;
      return {
        todos: [...prevState.todos, { id, description }],
        counter: id
      };
    });
  }

  handleTodoCheck(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo">
        <h1>Todo List</h1>
        <TodoAddForm onTodoAddition={this.handleTodoAddition} />
        <TodoList
          todos={this.state.todos}
          handleTodoCheck={this.handleTodoCheck}
        />
        <div className="todo-footer">Artur Hayrapetyan</div>
      </div>
    );
  }
}

export default TodoApp;
