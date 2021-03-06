import React from 'react';

import Button from './button';

const largeColumn = {
  width: '40%',
};

const midColumn = {
  width: '30%',
};

const smallColumn = {
  width: '10%',
};

const Table = ({ list, onDismiss }) => (
  <ul className="table">
    {list.map(item => {
      const onHandleDismiss = () => onDismiss(item.objectID);

      return (
        <li key={item.objectID} className="table-row">
          <span style={largeColumn}>
            <a href={item.url} title={item.title}>
              {item.title}
            </a>
          </span>
          <span style={midColumn}>{item.author}</span>
          <span style={smallColumn}>{item.num_comments}</span>
          <span style={smallColumn}>{item.points}</span>
          <span style={smallColumn}>
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
