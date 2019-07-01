import React, { Component } from 'react';
import store from './store';
import * as actionCreators from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInput = this.changeInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  componentDidMount() {
    const action = actionCreators.getTodoList();
    store.dispatch(action);
  }

  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      changeInput={this.changeInput}
      addItem={this.addItem}
      list={this.state.list}
      deleteItem={this.deleteItem}
    />;
  }

  addItem() {
    const action = actionCreators.getAddItemAction();
    store.dispatch(action);
  }

  changeInput(e) {
    const action = actionCreators.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = actionCreators.getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;