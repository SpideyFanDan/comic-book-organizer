import React from 'react';

function ComicBooks(props) {
	return (
		<div className='comics-list'>
			{/* {comicBooks.map((comicBook) => (
					<div className='results' id={comicBook.id}>
						<img className='tiny-image' src={comicBook.image.icon_url} alt={comicBook.volume.name + 'cover'} />
                <p>{comicBook.volume.name}, {comicBook.issue_number}, {comicBook.cover_date}</p>
					</div>
				))} */}
		</div>
	);
}

export default ComicBooks;
