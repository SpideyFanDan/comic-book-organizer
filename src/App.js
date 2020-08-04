import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search';
import Header from './Header';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container'>
				{/* <Link to='/'>
					<nav id='home'>Home</nav>
				</Link>
				<Link to='/search'><nav id='search'>Search</nav></Link> */}
				// <Header />
				<main>
					{/* <Route
						path='/search'
						render={(routerProps) => {
							return ( */}
								<Search
									// match={routerProps.match}
									setComicBooks={this.setComicBooks}
								/>
							{/* );
						}}
					/> */}
				</main>
			</div>
		);
	}
}

export default App;
