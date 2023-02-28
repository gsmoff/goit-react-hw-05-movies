import { useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByCast } from '../../../services/moviesApi';
import { Outlet } from 'react-router-dom';
import css from './CastMovies.module.css';

export const CastMovies = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMoviesByCast(movieId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data) {
                    throw new Error('Movie is not defined');
                } else {
                    setActors(data.cast);
                }
            })
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <div className={css.colum}>
            <ul className={css.imageGallery}>
                {actors.length === 0 && (
                    <p>We don`t have information about the cast</p>
                )}
                {actors.map(
                    ({ character, original_name, profile_path, id }) => (
                        <li
                            key={id}
                            className={css.imageGalleryItem && css.colum}
                        >
                            <img
                                src={
                                    profile_path
                                        ? 'https://image.tmdb.org/t/p/original' +
                                          profile_path
                                        : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
                                }
                                alt={character}
                                width="150"
                            />
                            <h3>{original_name}</h3>
                            <p>{character}</p>
                        </li>
                    )
                )}
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};
