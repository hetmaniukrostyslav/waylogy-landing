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
        sendEmail();
        // buttonForm.addEventListener('transitionend', addClass);
        // setTimeout(() => {
        //     form.reset();
        // }, 1500)
    })

    function sendEmail() {
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('name', name);
        console.log('email', email);
        console.log('message', message);
        
        $.ajax({
          type: "POST",
          url: "https://waylogyapi.azurewebsites.net/api/Mail",
          data: JSON.stringify({ "email": email, "name" : name, "message" : message }),
          contentType: "application/json",
          success: function (result) {
                buttonForm.addEventListener('transitionend', addClass);
                form.reset();
          },
          error: function (result, status) {
            console.log(result);
          }
        });
        
        //.then(function (message) {
          //  buttonForm.addEventListener('transitionend', addClass);
            //form.reset();
        //})
    }

    // Animation
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 5;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = document.documentElement.scrollLeft,
                scrollTop = document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
            animOnScroll();
        }, 500);

    }

}, false);
