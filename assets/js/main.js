document.addEventListener('DOMContentLoaded', function  () {
    console.log('inicio');

    const btnOpen = document.querySelector('#btn-open');
    const btnClose = document.querySelector('.button__close');
    const mainMenu = document.querySelector('.mains__menu');
    const mMedia = window.matchMedia('( width < 68.74em)');
    const scrollBody = document.querySelector('body'); 
    /* const openMenu = document.querySelector('.mains__menu--open'); */

    menuAccess(mMedia);

    btnOpen.addEventListener('click', () =>{
        openMenu();
    });

    btnClose.addEventListener('click', () =>{
        closeMenu();
    });


    mMedia.addEventListener('change', function  (e) {
        menuAccess(e);
    })    

    function openMenu() {
        console.log('true');
        btnOpen.setAttribute('aria-expanded', 'true');
        /* mainMenu.classList.remove('display__none'); */
        mainMenu.classList.add('mains__menu--open');
        mainMenu.inert = false;
        mainMenu.removeAttribute('style');
        bodyScrollLockUpgrade.disableBodyScroll(scrollBody);
        btnClose.focus();
    }

    function closeMenu() {
        console.log('close');
        btnOpen.setAttribute('aria-expanded', 'false');
        mainMenu.classList.remove('mains__menu--open');
        mainMenu.inert = true;
        bodyScrollLockUpgrade.enableBodyScroll(scrollBody);
        setTimeout(() => {
            mainMenu.style.transition = "none";
        }, 500);
        btnOpen.focus();
        /* mainMenu.classList.add('display__none'); */
    }

    function menuAccess(e) {
        if (e.matches) {
            console.log('menor 1100px'); 
            /* mainMenu.setAttribute('inert', ''); */
            mainMenu.inert = true;
            mainMenu.style.transition = "none";

        } else {
           console.log('mayor 1100px'); 
            /* mainMenu.removeAttribute('inert'); */
            mainMenu.inert = false;
        }
    }

});
