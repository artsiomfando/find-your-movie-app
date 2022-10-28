import React, { useEffect, useRef, useState } from 'react';

import { CONTEXT_MENU_OPTIONS } from '../constants';
import './_contextMenu.scss';

const ContextMenu = () => {
  const [menuData, setMenuData] = useState({ showMenu: false, posX: 0, posY: 0 });
  const contextMenuRef = useRef<any>(null);

  const onContextMenu = (e: any) => {
    const targetElement = document.querySelector('.movieCard');
    if (targetElement && e.target.closest('.movieCard')) {
      e.preventDefault();
      setMenuData({ showMenu: true, posX: e.pageX, posY: e.pageY });
    } else {
      setMenuData({ ...menuData, showMenu: false });
    }
  };

  const onClickoutsideContextMenu = (e: any) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setMenuData({ ...menuData, showMenu: false });
    }
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
        <div key={option} className="contextMenu__option">{option}</div>
      ))}
    </div>
  );
};

export default ContextMenu;
