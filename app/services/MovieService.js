//API calls header
options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQ4MjhmNzc5NTFjNGM1ZGE0Njg3NzhhZGY3NDZiNCIsIm5iZiI6MTc1MTIwODA1MS43MzksInN1YiI6IjY4NjE1MDczYTkwZjg3YTg4MDRkMWU2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1uE5XMadu4ll-9ABPlZZ8EGl9C0RDnXDhrf7-4UDOo'
    }
};

//API to get Popular movies list
export async function getPopularMovies() {
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', this.options)
        .then((response) => response.json())
        .then(json => json)
        .catch(err => console.error(err));
}

//API to get Top rated movies list
export async function getTopRatedMovies() {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', this.options)
        .then((response) => response.json())
        .then(json => json)
        .catch(err => console.error(err));
}

//API to get search movies list
export async function searchMovies(searchText) {
    return fetch('https://api.themoviedb.org/3/search/movie?query=' + searchText + '&include_adult=false&language=en-US&page=1', this.options)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error(err));
}
