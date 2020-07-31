import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Search from './Search';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Header />
				<main>
					<Search />
				</main>
			</div>
		);
	}
}

export default App;
