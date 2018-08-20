import React from 'react';

import Button from './button';

import isSearched from '../utils/is-searched';

function Table(props) {
  const { list, pattern, onDismiss } = props;

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
              <Button onClick={onHandleDismiss}>Dismiss</Button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Table;
