import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

// if dont recognize anything, uses Switch to make sure only one component render
const FourOhFour = () => <h1>404</h1>

const App = () => (
	<BrowserRouter>
  <div className="app">
  	<Switch>
	  	<Route exact path="/" component={Landing} />
	  	<Route path="/search" component={Search} />
	  	<Route component={FourOhFour} />
  	</Switch>
  </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
