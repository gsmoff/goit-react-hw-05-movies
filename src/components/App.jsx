import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { Movies } from './pages/Movies/Movies';
// import { Home } from './pages/Home/Home';
// import { CastMovies } from './pages/CastMovies/CastMovies';
// import { MovieDetails } from './pages/MovieDetails/MovieDetails';
// import { ReviewsMovies } from './pages/ReviewsMovies/ReviewsMovies';

const Home = lazy(() => import('./pages/Home/Home').then(module => ({...module,default:module.Home})))
const Movies = lazy(() => import('./pages/Movies/Movies').then(module => ({...module,default:module.Movies})))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails').then(module => ({...module,default:module.MovieDetails})))
const CastMovies = lazy(() => import('./pages/CastMovies/CastMovies').then(module => ({...module,default:module.CastMovies})))
const ReviewsMovies = lazy(() => import('./pages/ReviewsMovies/ReviewsMovies').then(module => ({...module,default:module.ReviewsMovies})))
// const Movies = lazy(() => import('./pages/Movies/Movies').then(module => ({...module,default:module.Movies})))

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
