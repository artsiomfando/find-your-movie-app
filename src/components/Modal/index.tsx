import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

interface Props {
  title: string
  children: ReactNode
}

const Modal = ({ title, children }: Props) => ReactDOM.createPortal(
  <div className="ui dimmer active movie-modal">
    <div className="ui modal active">
      <Link to="/" className="modal__close-cross" />
      <h3 className="modal__title">{title}</h3>
      {children}
    </div>
  </div>,
  document.querySelector('#modal')!
);

export default Modal;
