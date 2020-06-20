import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<section>
						<img src={selected.Poster} alt="poster" />
					</section>
					<section>
						<p><b>Plot:</b> {selected.Plot}</p>
						<p><b>Released:</b> {selected.Released}</p>
						<p><b>Genre:</b> {selected.Genre}</p>
						<p><b>Rated:</b> {selected.Rated}</p>
						<p><b>Runtime:</b> {selected.Runtime}</p>
						<p><b>Director:</b> {selected.Director}</p>
						<p><b>Writer:</b> {selected.Writer}</p>
						<p><b>Actors:</b> {selected.Actors}</p>
					</section>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
