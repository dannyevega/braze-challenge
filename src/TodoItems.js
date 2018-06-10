import React, { Component } from 'react';

export default class TodoItems extends Component {
  removeTodo = (key) => {
    this.props.remove(key);
  }
  render() {
    let items = this.props.items;
    return(
      <ul className='todo-items'>
        {items.map(todo => {
          return <li key={todo.key} onClick={() => this.removeTodo(todo.key)}>{todo.item}</li>
        })}
      </ul>      
    )
  }
}
