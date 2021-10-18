"use strict"


function getMovies() {
	return fetch("https://jazzy-believed-foxglove.glitch.me/movies").then((response) => response.json());//response.json() returns a promise
}



$(document).ready(function () {

	getMovies().then(movies => {
		console.log(movies);
		movies.forEach(function (movie) {
			console.log(movie)
			$("#moviesContainer").append("<h1>" + movie.title + "</h1>" + "<h4>" + "<em>" + "Directed by: " + movie.director + "</em>" + "</h4>" + "Poster" + "<br>" + "Year released: " + movie.year + "<br>" + "Rating: " + movie.rating + " stars" + "<br>" + movie.genre + "<br>" + "<p>" + "<strong>" + movie.plot + "</strong>" + "</p>" + "<hr>")


		})


	});


	$("#refresh").click(function () {
		location.reload()
	})


	///LOADING SCREEN///////
	$('#load').show(function () {
		setTimeout(function () {
			$('#load').hide()
		}, 2000);


	})

})
////////////////GRAVE YARD////////////////////////

