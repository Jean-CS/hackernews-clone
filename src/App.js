import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/search';
import Table from './components/table';
import Button from './components/button';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '30';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(
      this,
    );
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    const apiUrl = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;

    const oldHits = page !== 0 ? this.state.result.hits : [];

    const updatedHits = [...oldHits, ...hits];

    this.setState({
      result: {
        hits: updatedHits,
        page,
      },
    });
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

    const updatedHits = this.state.result.hits.filter(
      item => item.objectID !== id,
    );

    this.setState({
      // ES6
      result: {
        ...this.state.result,
        hits: updatedHits,
      },

      // SAME AS

      // ES5
      // result: Object.assign(
      //   {},
      //   this.state.result, { hits: updatedHits }
      // ),
    });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    const { searchTerm, result } = this.state;
    const page = (result && result.page) || 0;

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>

        {result && (
          <Table list={result.hits} onDismiss={this.onDismiss} />
        )}

        <div className="interactions">
          <Button
            onClick={() =>
              this.fetchSearchTopStories(searchTerm, page + 1)
            }
          >
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
