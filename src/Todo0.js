import React from 'react';
import { store, actions } from './Store.js';
import api from './Api.js';

const bucketId = "9a1163b8-c12d-438d-a9d6-90470f0c5d15";
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

class Todo extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(() => {
      const currentState = store.getState();
      this.setState(currentState);
    });
    this.readData();
  }

  createItem(input){
    api.create(input, () => this.readData());
  }
  readData(){
    const cb = (data) => {
      store.dispatch(Object.assign({}, actions.RENDER_LIST, { items: data.items }));
    }
    api.read(cb);
  }
  updateItem(id){
    api.update(id, () => this.readData());
  }
  deleteItem(evt, id){
    evt.stopPropagation();
    api.delete(id, () => this.readData());
  }

  handleKeyUp(evt){
    if(evt.keyCode === 13){
      this.createItem(this.state.input);
    }
  }
  handleChange(evt){
    store.dispatch(Object.assign({}, actions.SEARCH_VALUE_CHANGE, { value: evt.target.value }));
  }

  render(){
    const listItems = this.state.items.map((item) => {
      const className = item.isComplete ? 'complete' : '';
      return(
        <li onClick={(evt)=> this.updateItem(item.id, evt)}
          key={item.id} >
          <p className = {className}>
            {item.text}
          </p>
          <button onClick={(evt) => this.deleteItem(evt, item.id)}>
            delete
          </button>
        </li>
      );
    });
    return(
      <div className="container">
        <div className="header">
          <h1>To Do List:</h1>
          <input
            onKeyUp={(evt)=> this.handleKeyUp(evt)}
            onChange={(evt)=> this.handleChange(evt)}
            value={this.state.input}/>
        </div>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

module.exports = Todo;
