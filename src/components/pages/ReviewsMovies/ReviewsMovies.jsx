import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesByReviews } from '../../../services/moviesApi';
import { Outlet } from 'react-router-dom';

export const ReviewsMovies = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMoviesByReviews(movieId)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (!data) {
                    throw new Error('Movie is not defined');
                } else {
                    setReviews(data.results);
                }
            })
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
            {reviews && (
                <>
                    <div>
                        <ul>
                            {reviews.map(({ id, author, content }) => (
                                <li key={id}>
                                    <h3>{author}</h3>
                                    <p>{content}</p>
                                </li>
                            ))}
                        </ul>
                        <Outlet />
                    </div>
                </>
            )}
            {reviews.length === 0 && (
                <p>We don`t have any reviews for this movie</p>
            )}
        </>
    );
};
