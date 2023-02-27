import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/moviesApi';
import { Link, Outlet,useNavigate, useLocation } from 'react-router-dom';

export const MovieDetails = () => {
    const [movie, setMovie] = useState('');
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        fetchMoviesById(movieId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data) {
                    throw new Error('Movie is not defined');
                } else {
                    setMovie(data);
                }
            })
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
            <button
                style={{
                    margin: '10px',
                }}
                onClick={() => navigate(location.state?.from ?? '/')}
            >
                Go back
            </button>
            {movie && (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#010101',
                        }}
                    >
                        <img
                            src={
                                movie.poster_path
                                    ? 'https://image.tmdb.org/t/p/original' +
                                      movie.poster_path
                                    : 'https://orten.in.ua/default-img.png'
                            }
                            alt={movie.title || movie.name}
                            width="240"
                        />
                        <div
                            style={{
                                padding: '10px',
                            }}
                        >
                            {' '}
                            <h2>{movie.original_title || movie.name}</h2>
                            <h4>Overview</h4>
                            <p>{movie.overview}</p>
                            <h4>Genres</h4>
                            <ul>
                                {movie.genres.map(({ id, name }) => (
                                    <li key={id}>{name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                        </li>
                        <li>
                            <Link to={`/movies/${movieId}/reviews`}>
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <Outlet />
                </>
            )}
        </>
    );
};
