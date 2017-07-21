import React from 'react';
import { createStore } from 'redux';

const initialState = {
  input: '',
  items: []
};

const actions = {
  SEARCH_VALUE_CHANGE: { type: 'SEARCH_VALUE_CHANGE' },
  RENDER_LIST: { type: 'RENDER_LIST' }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEARCH_VALUE_CHANGE':
      return Object.assign({}, state, { input: action.value });
    case 'RENDER_LIST':
      return Object.assign({}, state, { input: '', items: action.items });
  }
  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: actions
}
