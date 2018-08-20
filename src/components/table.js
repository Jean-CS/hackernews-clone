import React from 'react';

import Button from './button';

import isSearched from '../utils/is-searched';

const Table = ({ list, pattern, onDismiss }) => (
  <ul className="table">
    {list.filter(isSearched(pattern)).map(item => {
      const onHandleDismiss = () => onDismiss(item.objectID);

      return (
        <li key={item.objectID} className="table-row">
          <span style={{ width: '40%' }}>
            <a href={item.url} title={item.title}>
              {item.title}
            </a>
          </span>
          <span style={{ width: '30%' }}>{item.author}</span>
          <span style={{ width: '10%' }}>{item.num_comments}</span>
          <span style={{ width: '10%' }}>{item.points}</span>
          <span style={{ width: '10%' }}>
            <Button
              onClick={onHandleDismiss}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </li>
      );
    })}
  </ul>
);

export default Table;
