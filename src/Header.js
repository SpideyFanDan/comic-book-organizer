import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

function Header(props) {
	return (
		<header className='header'>
			<h1 className='title'>Comic Books</h1>
			{/* <Link to='/'> */}
			<nav id='home'>Home</nav>
			{/* </Link> */}
			{/* <Link to='/search'> */}
			<nav id='search'>Search</nav>
			{/* </Link> */}
		</header>
	);
}

export default Header;
