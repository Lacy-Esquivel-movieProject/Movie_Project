"use strict"


function getMovies() {
    return fetch("https://jazzy-believed-foxglove.glitch.me/movies").then((response) => response.json());//response.json() returns a promise
}

let stars = new Image()


$(document).ready(function () {

    $('#moviesContainer').hide(function () {
        setTimeout(function () {
            // noinspection JSUnresolvedFunction
            $('#moviesContainer').show()
        }, 750);
    })

    getMovies().then(movies => {
        console.log(movies);
        movies.forEach(function (movie) {
            console.log(movie)
            $("#moviesContainer").append("<h1>" + movie.title + "</h1>" + "<h4>" + "<em>" + "Directed by: " + movie.director + "</em>" + "</h4>" + "${movie.poster}" + "<br>" + "Year released: " + movie.year + "<br>" + "Rating: " + movie.rating + " stars" + "<br>" + movie.genre + "<br>" + "<p>" + "<strong>" + movie.plot + "</strong>" + "</p>" + "<hr>")

            // 	$(“.card-body”).append(`<div class=‘movieTitle m-2 text-center card-width’ id=‘${movie.id}’>
            //                         <div class=“card-body text-wrap”>
            //                         <h5>${movie.title}</h5>
            //                         <p class=“card-text“>Rating: ${movie.rating}</p>
            //                         <p class=“card-text”>Genre: ${movie.genre}</p>
            //                         <button type=“button” class=“delete-btn btn btn-danger”>Delete</button></div></div>`)
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

    //Add a Movie//


    const addMovie = {title: 'title', body: 'Are a fun way to use JS!'};
    const url = 'https://jazzy-believed-foxglove.glitch.me/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addMovie),
    };

////////////////GRAVE YARD////////////////////////

})