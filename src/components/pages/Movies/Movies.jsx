import { useState, useEffect } from 'react';
import { fetchMoviesBySearch } from 'services/moviesApi';
import { Link, Outlet } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const event = searchParams.get('searchText') ?? '';
        const location = useLocation();

    const handleSubmit = e => {
        e.preventdefault();
        const form = e.target;
        setSearchParams({ searchText: form.elements.searchText.value });
        form.reset();
    };
    useEffect(() => {
        if (event === null && event === "") {
            return;
        }
        fetchMoviesBySearch(event)
            .then(response => response.json())
            .then(data => {
                console.log(event);
                if (!data) {
                    throw new Error('Movie is not defined');
                } else {
                    setMovies(data.results);
                }
            })
            .catch(error => console.log(error));
    }, [event]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchText" />
                <button type="submit">Search</button>
            </form>

            {event && (
                <ul>
                    {movies.map(({ id, title, name }) => (
                        <li key={id}>
                            <Link
                                to={`/movies/${id}`}
                                state={{ from: location }}
                            >
                                {title || name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Outlet />
        </>
    );
};
