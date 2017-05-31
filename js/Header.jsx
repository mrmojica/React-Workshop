// @flow

import React from 'react';
import { Link } from 'react-router-dom';

// showSearch? maybe type

const Header = (props: { showSearch?: boolean, handleSearchTermChange?: Function, searchTerm?: string }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

// if they didnt ask for search going to assume they didnt want it
Header.defaultProps = {
	showSearch: false,
	handleSearchTermChange: function noop () {},
	searchTerm: ''
}

export default Header;