import React from 'react';

function Search(props) {
  const { value, onChange, children } = props;

  return (
    <form>
      {children}
      <input type="text" onChange={onChange} value={value} />
    </form>
  );
}

export default Search;
