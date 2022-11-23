import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppDispatch } from 'reduxStore/store';
import { removeMovie } from 'reduxStore/apiCalls';
import Modal from '../../../components/Modal';

const MovieDelete = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const modalContent = () => (
    <>
      <p className="movieDelete__question">Are you sure you want to delete this movie?</p>
      <button
        type="button"
        className="button modal-button movieDelete__button"
        onClick={() => dispatch(removeMovie(+id!))}
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
