import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';
import 'assets/demo/demo.css';
// pages
import Index from 'views/Index.js';
import About from 'views/about.js';
import Team from 'views/team.js';
import Gallery from 'views/gallery.js';
import Events from 'views/events.js';
import Contact from 'views/contact';
// others

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/index" render={(props) => <Index {...props} />} />
			<Route path="/about" render={(props) => <About {...props} />} />
			<Route path="/team" render={(props) => <Team {...props} />} />
			<Route path="/gallery" render={(props) => <Gallery {...props} />} />
			<Route path="/contact" render={(props) => <Contact {...props} />} />
			<Route path="/events" render={(props) => <Events {...props} />} />
			<Redirect to="/index" />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
