document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('#loading');
    loader.classList.add('hide');

    const swiper = new Swiper(".swiper", {
        loop: false,
        spaceBetween: 50,
        // navigation: {
        //     nextEl: ".swiper-button-custom-next",
        //     prevEl: ".swiper-button-custom-prev"
        // }
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

    window.addEventListener('load', AOS.refresh);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function burgerMenu() {
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.menu');
        const body = document.querySelector('body');
        burger.addEventListener('click', () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active');
                burger.classList.add('active-burger');
                body.classList.add('locked');
            } else {
                menu.classList.remove('active');
                burger.classList.remove('active-burger');
                body.classList.remove('locked');
            }
        });

        menu.addEventListener('click', (e) => {
            if (e.target.className === 'menu__item-link') {
                menu.classList.remove('active');
                burger.classList.remove('active-burger');
                body.classList.remove('locked');
            }
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth > 767.98) {
                menu.classList.remove('active');
                burger.classList.remove('active-burger');
                body.classList.remove('locked');
            }
        });
    }

    burgerMenu();

    function addClass() {
        this.classList.add('finished');
        setTimeout(() => {
            this.classList.remove('finished');
        }, 1500);
    }

    function toggleClass() {
        this.classList.toggle('active');
    }

    const buttonForm = document.querySelector('.btn-form');
    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        buttonForm.classList.toggle('active');
        buttonForm.addEventListener('transitionend', toggleClass);
        buttonForm.addEventListener('transitionend', addClass);
        setTimeout(() => {
            form.reset();
        }, 1500)
    })

}, false);
