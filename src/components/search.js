import React from 'react';

function Search({ value, onChange, children }) {
  return (
    <form>
      {children}
      <input type="text" onChange={onChange} value={value} />
    </form>
  );
}

export default Search;
