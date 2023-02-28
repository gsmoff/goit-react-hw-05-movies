import { useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchMovies } from 'services/moviesApi';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchMovies()
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data.results)
                    Promise.reject(new Error('Movies is not defined'));
                else setMovies(data.results);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <ul>
                {movies.map(({ id, title, name }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {title || name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
