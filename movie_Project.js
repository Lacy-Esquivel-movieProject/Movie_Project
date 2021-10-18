"use strict"

$(document).ready(function () {


	function getMovies() {
		return fetch(`https://jazzy-believed-foxglove.glitch.me/movies`).then((response) => response.json());//response.json() returns a promise
	}

getMovies().then(movies => console.log(movies));


	const addMovie = (title,rating,id) => movies.push({"title":title,"rating":rating, "id":id});

})