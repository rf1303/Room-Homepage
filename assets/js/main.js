document.addEventListener('DOMContentLoaded', function  () {
    console.log('inicio');

    const btnOpen = document.querySelector('#btn-open');
    const btnClose = document.querySelector('.button__close');
    const mainMenu = document.querySelector('.mains__menu');
    /* const openMenu = document.querySelector('.mains__menu--open'); */

    btnOpen.addEventListener('click', () =>{
        openMenu();
    });

    btnClose.addEventListener('click', () =>{
        closeMenu();
    });


    function openMenu() {
        console.log('true');
        btnOpen.setAttribute('aria-expanded', 'true');
        /* mainMenu.classList.remove('display__none'); */
        mainMenu.classList.add('mains__menu--open');
    }

    function closeMenu() {
        console.log('close');
        btnOpen.setAttribute('aria-expanded', 'false');
        mainMenu.classList.remove('mains__menu--open');
        /* mainMenu.classList.add('display__none'); */
    }

});
