import { createSlice } from '@reduxjs/toolkit';

import {
  fetchMovies, fetchMovie, addMovie, removeMovie
} from './apiCalls';
import { FILTER_OPTIONS } from '../components/constants';
import { IMovieState } from '../components/types';

const initialState: IMovieState = {
  movies: [],
  activeMovie: null,
  sortByCategory: JSON.parse(localStorage.getItem('sortCategory')!) ?? FILTER_OPTIONS[0].value,
  filterByGenre: '',
  selectedMovieId: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeGenre(state, { payload }) {
      state.filterByGenre = payload;
    },
    changeSortCategory(state, { payload }) {
      state.sortByCategory = payload;
    },
    resetActiveMovie(state) {
      state.activeMovie = null;
    },
    setSelectedMovieId(state, { payload }) {
      state.selectedMovieId = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
      })
      .addCase(fetchMovie.fulfilled, (state, { payload }) => {
        state.activeMovie = payload;
      })
      .addCase(addMovie.fulfilled, (state, { payload }) => {
        state.movies.push(payload);
      })
      .addCase(removeMovie.fulfilled, (state, { payload }) => {
        state.movies.filter(({ id }) => id !== payload);
      });
  }
});

export const {
  changeGenre, changeSortCategory, resetActiveMovie, setSelectedMovieId
} = movieSlice.actions;

export default movieSlice.reducer;
