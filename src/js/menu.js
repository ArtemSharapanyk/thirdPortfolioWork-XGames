let addMenu = (menuClass, toggleBtnClass, activeClass) => {
    let menu      = document.querySelector(menuClass);
    let toggleBtn = document.querySelector(toggleBtnClass);

    toggleBtn.addEventListener('click', () => {
        if(menu.classList.contains(activeClass)){
            menu.classList.remove(activeClass);
        }
        else{
            menu.classList.add(activeClass);
        }
    });


};

module.exports = addMenu;