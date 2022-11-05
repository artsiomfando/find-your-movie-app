import { createSlice } from '@reduxjs/toolkit';

import { fetchMovies, fetchMovie } from './apiCalls';
import { FILTER_OPTIONS } from '../components/constants';
import { IMovieState } from '../components/types';

const initialState: IMovieState = {
  movies: [],
  activeMovie: null,
  sortByCategory: JSON.parse(localStorage.getItem('sortCategory')!) ?? FILTER_OPTIONS[0].value,
  filterByGenre: '',
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
      })
      .addCase(fetchMovie.fulfilled, (state, { payload }) => {
        state.activeMovie = payload;
      });
  }
});

export const { changeGenre, changeSortCategory, resetActiveMovie } = movieSlice.actions;

export default movieSlice.reducer;
