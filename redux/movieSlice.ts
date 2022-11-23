import { createSlice } from '@reduxjs/toolkit';

import {
  fetchMovies, fetchMovie, addMovie, editMovie, removeMovie
} from './apiCalls';
import { IMovieState } from '../components/types';

const initialState: IMovieState = {
  movies: [],
  activeMovie: null,
  selectedMovieId: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
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
      .addCase(editMovie.fulfilled, (state, { payload }) => {
        state.movies.map((movie) => (
          movie.id === state.selectedMovieId
            ? payload
            : movie
        ));
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
  resetActiveMovie, setSelectedMovieId
} = movieSlice.actions;

export default movieSlice.reducer;
