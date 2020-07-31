import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Search from './Search';
import Header from './Header';

// axios.interceptors.request.use(function(config) {
//   const keyHeader = {
// 'x-api-key': process.env.REACT_APP_COMICVINE_API_KEY
//   }
//   config.headers = keyHeader;
// })
class App extends Component {
	constructor() {
		super();
		this.state = {
			searchTitle: '',
			data: {}
		};
	}
	// componentDidMount() {
	// 	const cors = 'https://cors-anywhere.herokuapp.com/';
	// 	const url =
	// 		cors +
	// 		'https://comicvine.gamespot.com/api/issues/?api_key=' +
	// 		process.env.REACT_APP_COMICVINE_API_KEY +
	// 		'&format=json';
	// 	const url2 = `${cors}https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json`;
	// 	axios(url).then(console.log).catch(console.log);
	// 	axios(url)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 		})
	// 		.catch((err) => {
	// 			if (err.status === 404) {
	// 				alert('The page was not found');
	// 			} else {
	// 				alert('Something went wrong');
	// 			}
	// 		});
	// }
	// handleInput = (event) => {
	// 	let searchTitle = event.target.value;
	// 	this.setState({
	// 		[searchTitle]: searchTitle,
	// 	});
	// 	console.log(state.searchTitle);
	// };
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

/* Pseudo code */
//Create a header page with clickable navigation menu to search page, and home page
//connect App to each page created: Search.js, Header.js, ComicBook.js,
//connect API to App
//set up state in App
//set up search boolean for Search page, where title and issue number are searched for
