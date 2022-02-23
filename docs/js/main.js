document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('#loading');
    loader.classList.add('hide');


    const swiper = new Swiper(".swiper", {
        loop: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-custom-next",
            prevEl: ".swiper-button-custom-prev"
        }
    });

    const swiperD = document.querySelector('.swiper').swiper;

    swiperD.slideNext();

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 50, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    const inputCheckboxMenu = document.querySelector('.menu-hamburger-input');

    const nav = document.querySelector('.navigation');

    nav.addEventListener('click', e => {
        if (e.target.parentNode.classList.contains('navigation__item')) {
            inputCheckboxMenu.checked = false;
        }
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const button = document.querySelector('.btn-form');

    function toggleClass() {
        this.classList.toggle('active');
    }

    function addClass() {
        this.classList.add('finished');
        setTimeout(() => {
            this.classList.remove('finished');
        }, 1500);
    }

    button.addEventListener('click', toggleClass);
    button.addEventListener('transitionend', toggleClass);
    button.addEventListener('transitionend', addClass);
}, false);
