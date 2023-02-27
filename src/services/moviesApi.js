// import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bdc0e4e9aaa7667ff59f8bdca91622c0';

export const fetchMovies = () => {
    return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

export const fetchMoviesById = movieId => {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchMoviesByCast = movieId => {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};
export const fetchMoviesByReviews = movieId => {
    return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
export const fetchMoviesBySearch = searchText => {
    return fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchText}`
    );
};