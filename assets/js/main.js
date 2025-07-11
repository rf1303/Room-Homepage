document.addEventListener("DOMContentLoaded", function() {
    console.log("inicio");

    const btnOpen = document.querySelector("#btn-open");
    const btnClose = document.querySelector(".button__close");
    const mainMenu = document.querySelector(".mains__menu");
    const mMedia = window.matchMedia("( width < 68.74em)");
    const scrollBody = document.querySelector("body");
    const wrapperHeader = document.querySelector('.wrappers__headers');
    const mainShop = document.querySelectorAll('.mains__shop');
    const btnLeft = document.querySelector('.button__room--left');
    const btnRight = document.querySelector('.button__room--right');
    const tGallery = 3;
    let imgGallery = 0;
    /* const openMenu = document.querySelector('.mains__menu--open'); */

    menuAccess(mMedia);
    imageBack(imgGallery);

    btnOpen.addEventListener("click", () => {
        openMenu();
    });

    btnClose.addEventListener("click", () => {
        closeMenu();
    });

    mMedia.addEventListener("change", function(e) {
        menuAccess(e);
    });

    btnRight.addEventListener('click', () => {
        imgGallery = ( imgGallery + 1) % tGallery;
        imageBack( imgGallery ); 
    });

    btnLeft.addEventListener('click', () => {
        imgGallery = ( imgGallery - 1 + tGallery ) % tGallery;
        imageBack( imgGallery ); 
    });

    window.addEventListener('resize', () => {
        imageBack(imgGallery);
    });

    function openMenu() {
        console.log("true");
        btnOpen.setAttribute("aria-expanded", "true");
        /* mainMenu.classList.remove('display__none'); */
        mainMenu.classList.add("mains__menu--open");
        mainMenu.inert = false;
        mainMenu.removeAttribute("style");
        bodyScrollLockUpgrade.disableBodyScroll(scrollBody);
        btnClose.focus();
    }

    function closeMenu() {
        console.log("close");
        btnOpen.setAttribute("aria-expanded", "false");
        mainMenu.classList.remove("mains__menu--open");
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
            console.log("menor 1100px");
            /* mainMenu.setAttribute('inert', ''); */
            mainMenu.inert = true;
            mainMenu.style.transition = "none";
        } else {
            console.log("mayor 1100px");
            /* mainMenu.removeAttribute('inert'); */
            mainMenu.inert = false;
        }
    }

    function imgHeader(index) {
        const mobileDesk  = window.innerWidth < 700;
        const mb = mobileDesk ? 'mobile' : 'desktop';
        return `./assets/images/${mb}-image-hero-${index + 1}.jpg`; 
    }

    function imageBack(index) {
        const imgUrl = imgHeader(index);
        wrapperHeader.style.backgroundImage = `url('${imgUrl}')`;

        mainShop.forEach((element , i ) => {
            element.classList.toggle('display__none', i !== index);
        });

        console.log('imgGallery', imgGallery);
    } 

});
