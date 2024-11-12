function mobileNav() {
    // Бургер-меню
    document.addEventListener('DOMContentLoaded', function() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__menu');
        const body = document.body;

        if (burger && menu) {
            burger.addEventListener('click', function() {
                burger.classList.toggle('active');
                menu.classList.toggle('active');
                body.classList.toggle('lock');
            });

            menu.addEventListener('click', function() {
                burger.classList.remove('active');
                menu.classList.remove('active');
                body.classList.remove('lock');
            });
        }

        // Плавный скролл
        const anchors = document.querySelectorAll('a.scroll-to');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Кнопка "наверх"
        const backTopButton = document.querySelector('#back-top');
        if (backTopButton) {
            backTopButton.style.display = 'none';

            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    backTopButton.style.display = 'block';
                } else {
                    backTopButton.style.display = 'none';
                }
            });

            backTopButton.querySelector('a').addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });
}

export default mobileNav;
