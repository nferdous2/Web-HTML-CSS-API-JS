fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')

    .then(res => res.json())
    .then(data => setMovies(data.results))

const setMovies = (movies) => {
    // console.log(movies);
    const movieSpinner = document.getElementById('movie-spinner')
    movieSpinner.style.display = 'none';

    const movieContainer = document.getElementById('movie-container')

    for (const movie of movies) {
        // console.log(movie)
        const movieBox = document.createElement('div')
        movieBox.classList.add('col-md-3')
        const imageUrl = 'https://image.tmdb.org/t/p/original' + movie.poster_path
        movieBox.innerHTML = `
                <div class="shadow rounded p-3 m-2">
                <img class='img-fluid' src=${imageUrl}>
                    <h3>${movie.title}</h3>
                    <p>${movie.overview.slice(0, 150)}</p>
                    <button onClick='loadMovieDetails(${movie.id})' class='btn btn-primary'>See more
                    </button>
                </div>
        `
        movieContainer.appendChild(movieBox)

    }
}
//for movie id
const loadMovieDetails = (id) => {
    // console.log('button clicked .Id is' + id)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)

        .then(res => res.json())
        .then(data => setMovieDetails(data))
}
const setMovieDetails = (movie) => {
    console.log(movie)
    const movieDetails = document.getElementById('movie-details')
    movieDetails.innerHTML = ''
    const movieMore = document.createElement('div')
    movieMore.innerHTML = `<h3>${movie.original_title}</h3>`
    movieDetails.appendChild(movieMore)
}