import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {

	// instead of using constructor can just use state = { searchTerm: ''};

	state = { searchTerm: ''};
	
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
		handleSearchTermChange = event => { this.setState({searchTerm: event.target.value}) }


render() {
	return (
		<div className='search'>
		<header>
			<h1>svideo</h1>
			<input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='search' />
		</header>
			<div>
			{preload.shows
				// filter search used filter()
				.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0 )
				.map((show) => <ShowCard key={show.imdbID} {...show} />)}
			</div>
		</div>
		);
	}
}


export default Search; 