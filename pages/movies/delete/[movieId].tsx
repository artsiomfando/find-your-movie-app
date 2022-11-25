import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'reduxStore/store';
import { removeMovie } from 'reduxStore/apiCalls';
import Modal from '../../../components/Modal';

const MovieDelete = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { movieId } = router.query;

  const modalContent = () => (
    <>
      <p className="movieDelete__question">Are you sure you want to delete this movie?</p>
      <button
        type="button"
        className="button modal-button movieDelete__button"
        onClick={() => dispatch(removeMovie(+movieId!))}
      >
        Confirm
      </button>
    </>
  );

  return (
    <Modal title="delete movie">
      {modalContent()}
    </Modal>
  );
};

export default MovieDelete;
