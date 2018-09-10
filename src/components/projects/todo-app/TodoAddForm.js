import React, { Component } from 'react';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      error: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { input } = this.state;

    if (!input.trim().length) {
      this.setState({ error: 'Error: Input cannot be empty' });
      return;
    }

    this.props.onTodoAddition(input);

    // reset input, error
    this.setState({
      input: '',
      error: ''
    });
  }

  render() {
    return (
      <div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            type="text"
            name="input"
            placeholder="I want to..."
            value={this.state.input}
            onChange={this.handleInput}
          />
          <input className="todo-submit" type="submit" value="Add" />
        </form>
        {this.state.error && <div className="todo-error">{this.state.error}</div>}
      </div>
    );
  }
}

export default TodoAddForm;
