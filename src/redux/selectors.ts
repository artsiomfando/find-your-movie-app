import { IState } from '../components/types';

export const selectAllMovies = ({ movie: { movies } }: IState) => movies;
export const selectActiveMovie = ({ movie: { activeMovie } }: IState) => activeMovie;
export const selectMovieId = ({ movie: { selectedMovieId } }: IState) => selectedMovieId;
export const selectSortCategory = ({ movie: { sortByCategory } }: IState) => sortByCategory;
export const selectfilterByGenre = ({ movie: { filterByGenre } }: IState) => filterByGenre;
