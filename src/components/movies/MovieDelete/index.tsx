import React from 'react';

import Modal from '../../Modal';
import './_movieDelete.scss';

const MovieDelete = () => {
  const modalContent = () => (
    <>
      <p className="movieDelete__question">Are you sure you want to delete this movie?</p>
      <button type="button" className="button modal-button movieDelete__button">Confirm</button>
    </>
  );

  return (
    <Modal title="delete movie">
      {modalContent()}
    </Modal>
  );
};

export default MovieDelete;
