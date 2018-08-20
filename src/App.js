import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/search';
import Table from './components/table';

const list = [
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
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    // const updatedList = this.state.list.filter(function isNotId(item) {
    //   return item.objectID !== id;
    // });

    // OR

    // function isNotId(item) {
    //   return item.objectID !== id;
    // }
    // const updatedList = this.state.list.filter(isNotId);

    // OR

    // const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);

    // OR

    const updatedList = this.state.list.filter(
      item => item.objectID !== id,
    );

    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search onChange={this.onSearchChange} value={searchTerm}>
            Search
          </Search>
        </div>

        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
