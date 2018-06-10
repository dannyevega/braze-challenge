import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './index.css';

export default class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
      todos: []
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState({ value });
  }

  addItem = (e) => {
    const { todos } = this.state;
    e.preventDefault();
    if(this.state.value !== ''){
      let todo = {
        item: this.state.value,
        key: Date.now()
      }
      todos.push(todo);
    }
    this.setState({
      value: '',
      todos
    })
  }

  removeItem = (key) => {
    let filteredTodos = this.state.todos.filter(todo => {
      return (todo.key !== key)
    });

    this.setState({
      todos: filteredTodos
    });    
  }

  render() {
    return(
      <div className='container'>
        <div className='list'>
          <h2>Todo List: {(this.state.todos.length > 0) ? this.state.todos.length : 'Nothing'}</h2>
          <div>
            <form onSubmit={this.addItem}>
              <input
                type='text'
                placeholder='enter task'
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button>+ add</button>
            </form>
          </div>
          <TodoItems
            items={this.state.todos}
            remove={this.removeItem}
          />        
        </div>
      </div>
    )
  }
}

