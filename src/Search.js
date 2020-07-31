import React, { useState } from 'react';

function Search() {
	const [query, setQuery] = useState('');
	const [comicBooks, setComicBooks] = useState([]);
	const searchTitle = async (event) => {
		event.preventDefault();
		const cors = 'https://cors-anywhere.herokuapp.com/';
		const url = `${cors}https://comicvine.gamespot.com/api/search/?api_key=${process.env.REACT_APP_COMICVINE_API_KEY}&format=json&sort=name:asc&resources=issue&query=${query}`;
        try {
			const res = await fetch(url);
            const data = await res.json();
			setComicBooks(data.results);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<section>
			<form className='search-form' onSubmit={searchTitle}>
				<label className='search-label' htmlFor='query'>
					Search by Comic Title
				</label>
				<input
					className='search-box'
					type='text'
					name='query'
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder='i.e. Amazing Spider-Man...'
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='comics-list'>
				{comicBooks.map((comicBook) => (
					<div className='results' id={comicBook.id}>
						<img className='tiny-image' src={comicBook.image.icon_url} alt={comicBook.volume.name + 'cover'} />
                <p>{comicBook.volume.name}, issue # {comicBook.issue_number}, publication date: {comicBook.cover_date}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Search;
