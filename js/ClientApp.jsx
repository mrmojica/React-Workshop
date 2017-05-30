import React from 'react';
import { render } from 'react-dom';

// const test = (a,b) => { return a+b };
// since implicet return rewrite to:
// const test2 = (a,b) =>  a+b;


const App = () => (
		<div className='app'>
			<div className='landing'>
				<h1>svideo</h1>
				<input type='text' placeholder='Search' />
				<a>or Browse All </a>
			</div>
		</div>
	);

render(<App />, document.getElementById('app'));
