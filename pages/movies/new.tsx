import React from 'react';

import Modal from '../../components/Modal';
import MovieForm from '../../components/movies/MovieForm';

const MovieAdd = () => (
  <Modal title="add movie">
    <MovieForm />
  </Modal>
);

export default MovieAdd;
