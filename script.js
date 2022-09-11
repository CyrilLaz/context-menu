const contextMenu = document.querySelector('.context-menu');

function openContextMenu() {
    document.addEventListener("contextmenu", function(e) {
    if(e.target.classList.contains('cards__picture')) {
        e.preventDefault();
        positionMenu(e);
        toggleMenuOn();
        setListenerMenuOff();
    } else {
        toggleMenuOff();
    }
  });
}

function toggleMenuOn() {
  contextMenu.classList.add('context-menu_active');
}

function toggleMenuOff() {
  contextMenu.classList.remove('context-menu_active');
  removeListenerMenuOff()
}

function hideMenuByClick(e) {
    if (!e.target.closest('.context-menu_active')) toggleMenuOff();
}

function hideMenuByEsc(e) {
    if(e.key === 'Escape') toggleMenuOff();
}

function setListenerMenuOff() {
  document.addEventListener('click', hideMenuByClick);
  document.addEventListener('keydown', hideMenuByEsc);
}

function removeListenerMenuOff() {
    document.removeEventListener('click', hideMenuByClick);
    document.removeEventListener('keydown', hideMenuByEsc);
}

function getPosition(e) {
    let posx = e.pageX;
    let posy = e.pageY;
    return {
        x: posx,
        y: posy
      }
}

function positionMenu(e) {
    menuPosition = getPosition(e);
    menuPositionX = menuPosition.x + "px";
    menuPositionY = menuPosition.y + "px";
   
    contextMenu.style.left = menuPositionX;
    contextMenu.style.top = menuPositionY;
}

openContextMenu();