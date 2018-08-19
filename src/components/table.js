import React, { Component } from 'react';

import isSearched from '../utils/is-searched';

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;

    return (
      <ul>
        {list.filter(isSearched(pattern)).map(item => {
          const onHandleDismiss = () => onDismiss(item.objectID);

          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url} title={item.title}>
                  {item.title}
                </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={onHandleDismiss} type="button">
                  Dismiss
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Table;
