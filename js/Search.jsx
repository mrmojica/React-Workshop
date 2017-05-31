// @flow

import React, { Component } from 'react';
// import preload from '../data.json';
import ShowCard from './ShowCard';
import Header from './Header';


class Search extends Component {

	// instead of using constructor can just use state = { searchTerm: ''};

	state = { searchTerm: ''};

	// part of flow
	props: {
		// can be array of mixed/any/strings, try not to use any (doesn't care about type)
		// Show is coming from types.js
		shows: Array<Show>
	};


	
	// constructor (props) {
	// 	super(props)

	// 	this.state = {
	// 		searchTerm: 'this is some sort of debug statement'
	// 	}
	// 	// use this context instead of adding .bind(this) to the input onchange function.  It is less expensive (render would recreate function every render if used .bind(this) at input)
	// 	// this.handleSearchTermChange = this.handleSearchTermChange.bind(this);

		
	// }


// original function
	// handleSearchTermChange(event) {
	// 	this.setState({searchTerm: event.target.value})
	// }

	// alternatively you can use an arrow function to the function to fix bind issue

		  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => { this.setState({searchTerm: event.target.value}) }


render() {
	return (
		<div className='search'>
		<Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
			<div>
			{this.props.shows
				// filter search used filter()
				.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
				.map((show) => <ShowCard key={show.imdbID} {...show} />)}
			</div>
		</div>
		);
	}
}


export default Search; 