import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Movies } from './pages/Movies/Movies';
import { Home } from './pages/Home';
import { CastMovies } from './pages/CastMovies/CastMovies';
import { MovieDetails } from './pages/MovieDetails';
import { ReviewsMovies } from './pages/ReviewsMovies/ReviewsMovies'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route
                        path="/movies/:movieId/cast"
                        element={<CastMovies />}
                    />
                    <Route
                        path="/movies/:movieId/reviews"
                        element={<ReviewsMovies />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};
