import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedMovieId } from '../../redux/movieSlice';

import { AppDispatch } from '../../redux/store';
import { CONTEXT_MENU_OPTIONS } from '../constants';
import './_contextMenu.scss';

const ContextMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [menuData, setMenuData] = useState({ showMenu: false, posX: 0, posY: 0 });
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const onContextMenu = (e: MouseEvent) => {
    const targetElement = document.querySelector('.movieCard');
    const chosenCard = (e.target as HTMLElement).closest('.movieCard');

    if (targetElement && chosenCard) {
      e.preventDefault();
      dispatch(setSelectedMovieId(chosenCard.id));
      setMenuData({ showMenu: true, posX: e.pageX, posY: e.pageY });
    } else {
      setMenuData({ ...menuData, showMenu: false });
    }
  };

  const onClickoutsideContextMenu = (e: MouseEvent) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as HTMLElement)) {
      setMenuData({ ...menuData, showMenu: false });
    }
  };

  const onDeleteClick = () => {
    const modal = document.querySelector('#modal');
    modal?.classList.remove('hide');
  };

  useEffect(() => {
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('click', onClickoutsideContextMenu);
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('click', onClickoutsideContextMenu);
    };
  }, [menuData]);

  return (
    <div ref={contextMenuRef} className="contextMenu" style={{ display: `${menuData.showMenu ? 'flex' : 'none'}`, left: menuData.posX, top: menuData.posY }}>
      <div className="contextMenu__close-cross" />
      {CONTEXT_MENU_OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className="contextMenu__option"
          onClick={onDeleteClick}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ContextMenu;
