"use strict"


function getMovies() {
	return fetch(`https://jazzy-believed-foxglove.glitch.me/movies`).then((response) => response.json());//response.json() returns a promise

	}

$(document).ready(function () {



		getMovies().then(movies => {
			console.log(movies);
			movies.forEach(function(movie){
				console.log(movie)
				$("#moviesContainer").append("<h1>" + movie.title + "</h1>"
					+ "<span>" + img + "</span><br>")

				let img = 'img src="https://jazzy-believed-foxglove.glitch.me/movies' + movie.poster + '.png"'
			} )


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

