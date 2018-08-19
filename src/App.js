import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const LIST = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    return (
      <ul className="App">
        {LIST.map(item => (
          <li key={item.objectID}>
            <span>
              <a href={item.url} title={item.title}>
                {item.title}
              </a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
