"use strict"
const movieAPI = 'https://jazzy-believed-foxglove.glitch.me/movies';

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
            // console.log(movie)
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

        // console.log(addedMovie);
        addMovie(addedMovie).then((NEWmovie) => console.log(NEWmovie));
        Refresh;
    })

    //Delete Movie//
    // function deleteMovie(title) {
    //     let options = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(title)//convert the JS object into a JSON string before sending it up to the server.
    //     }
    //     return fetch(`${movieAPI}`, options)
    //         .then((response) => response.json())
    //
    //
    // }
    //
    // console.log(deleteMovie("Spider-Man"));

})

////////////////GRAVE YARD////////////////////////

