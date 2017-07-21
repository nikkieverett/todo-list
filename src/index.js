import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Todo from './Todo0';
import './index.css';


class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route path="/" component={Todo} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
