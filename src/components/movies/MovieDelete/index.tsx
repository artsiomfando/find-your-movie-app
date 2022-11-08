import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Modal from '../../Modal';
import { AppDispatch } from '../../../redux/store';
import { removeMovie } from '../../../redux/apiCalls';
import './_movieDelete.scss';

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
