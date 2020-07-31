import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

class SearchTest extends Component {
	constructor() {
		super();
		this.state = {
			titleQuery: '',
			comicBooksResults: [],
			loading: false,
		};
		this.handleRedirect = this.handleRedirect.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const cors = 'https://cors-anywhere.herokuapp.com/';
		const url = `${cors}https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json`;
		axios(url).then(console.log).catch(console.log);
		axios(url)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				if (err.status === 404) {
					alert('The page was not found');
				} else {
					alert('Something went wrong');
				}
			});
	}
	render() {
		const { titleQuery, loading } = this.state;
		return (
			<section>
				<form className='search-form'>
					<label className='search-label'>Search by Comic Title</label>
					<input
						className='search-box'
						type='text'
						name='query'
						value={titleQuery}
						onChange={this.handleChange}
						placeholder='i.e. Amazing Spider-Man...'
					/>
					<button className='search-button' type='submit'>
						Search
					</button>
				</form>
				<div className='comics-list'>
					{/* {comicBooks.map((comicBook) => (
					<div className='results' id={comicBook.id}>
						<img className='tiny-image' src={comicBook.image.icon_url} alt={comicBook.volume.name + 'cover'} />
                <p>{comicBook.volume.name}, {comicBook.issue_number}, {comicBook.cover_date}</p>
					</div>
				))} */}
				</div>
				{this.renderSearchResults()}
			</section>
		);
	}
	handleRedirect(volume_id) {
		this.setState({
			titleQuery: '',
			comicBookResults: [],
		});

		this.props.history.push(`/volume/4050-${volume_id}`);
	}
	renderSearchResults() {
		const { comicBookResults, titleQuery, loading } = this.state;

		if (!titleQuery) {
			return '';
		}

		if (comicBookResults.length > 0) {
			console.log(comicBookResults);
			return (
				<div className='results'>
					{comicBookResults.map((result) => (
						<div
							key={result.id}
							className='Search-result'
							onClick={() => this.handleRedirect(result.id)}>
							<img
								className='tiny-image'
								src={result.image.icon_url}
								alt={result.volume.name + 'cover'}
							/>
							{result.name}| {result.issue_number}| {result.cover_date}
						</div>
					))}
				</div>
			);
		}
		if (!loading) {
			return (
				<div className='Search-result-container'>
					<div className='Search-no-result'>No results found.</div>
				</div>
			);
		}
	}
	handleChange(event) {
		const titleQuery = event.target.value;
		const cors = 'https://cors-anywhere.herokuapp.com/';
		const url = `${cors}https://comicvine.gamespot.com/api/issue/4000-14582/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json`;
		this.setState({ titleQuery });
		if (!titleQuery) {
			return false;
		}
		this.setState({ loading: true });
		fetch(url)
			.then((res) => {
				return res.json().then((json) => {
					return res.ok ? json : Promise.reject(json);
				});
			})
			.then((result) => {
				console.log(result.results);
				this.setState({
					comicBookResults: result.results,
					loading: false,
				});
			});
	}
}
export default SearchTest;
