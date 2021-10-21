"use strict"
const movieAPI = 'https://jazzy-believed-foxglove.glitch.me/movies';

function getMovies() {
	return fetch("https://jazzy-believed-foxglove.glitch.me/movies").then((response) => response.json());//response.json() returns a promise
}

$(document).ready(function () {

	$('#moviesContainer').hide(function () {
		setTimeout(function () {
			// noinspection JSUnresolvedFunction
			$('#moviesContainer').show()
		}, 750);
	})

	let results = [];

	function renderMovie() {
		getMovies().then(movies => {
			results = movies
			console.log(movies);
			movies.forEach(function (movie) {
				// console.log(movie)
				$("#moviesContainer").append("<h1>" + movie.title + "</h1>" + "<h4>" + "<em>" + "Directed by: " + movie.director + "</em>" + "</h4>" + "${movie.poster}" + "<br>" + "Year released: " + movie.year + "<br>" + "Rating: " + movie.rating + " stars" + "<br>" + movie.genre + "<br>" + "<p>" + "<strong>" + movie.plot + "</strong>" + "</p>" + "<br>" + "<hr>")
			})

		});
	}

	renderMovie()
	///LOADING SCREEN///////
	$('#load').show(function () {
		setTimeout(function () {
			$('#load').hide()
		}, 2000);


	})

	// $(window).show(function() {
	// 	setTimeout(function () {
	// 		$('#loading').hide()}, 2000)
	//
	// });

	// Add a Movie//

	function addMovie(movie) {
		let options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie)//convert the JS object into a JSON string before sending it up to the server.
		}
		return fetch(`${movieAPI}`, options)
			.then((response) => response.json())

	}


	const newTitle = document.querySelector('#movie-title');
	const newGenre = document.querySelector('#movie-genre');
	const newRating = document.querySelector('#movie-rating');
	const addMovieButton = document.querySelector('#add-movie');


	addMovieButton.addEventListener('click', function (event) {
		event.preventDefault();
		const addedTitle = newTitle.value;
		const addedGenre = newGenre.value;
		const addedRating = newRating.value;
		const addedMovie = {
			title: addedTitle,
			genre: addedGenre,
			rating: addedRating
		};
		addMovie(addedMovie).then((NEWmovie) => console.log(NEWmovie)).then(movie => renderMovie());
	})


	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EDIT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


	function editMovie(movie) {
		let options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie)//convert the JS object into a JSON string before sending it up to the server.
		}
		return fetch(`${movieAPI}/${movie.id}`, options)
			.then((response) => response.json())
	}

	const editMovieButton = document.querySelector('#edit-movie');
	const editTitle = document.querySelector('#edit-title');


	editMovieButton.addEventListener(`click`, function (event) {
		event.preventDefault();
		const editTitle = editTitle.value;

		const editedMovie = results.find(function (movie) {
			return movie.title === editedTitle
		})

		editMovie(editedMovie).then((EDITmovie) => console.log(EDITmovie)).then(movie => renderMovie());
	})


/////////////////////////////DELETE MOVIE//////////////////////////////////

	function deleteMovie(movie) {
		console.log(movie);
		let options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie)//convert the JS object into a JSON string before sending it up to the server.
		}
		return fetch(`${movieAPI}/${movie.id}`, options)
			.then((response) => response.json())
	}

	const deleteMovieButton = document.querySelector('#delete-movie');

	const deleteTitle = document.querySelector('#movie-title');


	deleteMovieButton.addEventListener('click', function (event) {
		event.preventDefault();

		const deletedTitle = deleteTitle.value;


		const deletedMovie = results.find(function (movie) {
			return movie.title === deletedTitle
		})

		deleteMovie(deletedMovie).then((DELETEmovie) => console.log(DELETEmovie)).then(movie => renderMovie());
	})
})