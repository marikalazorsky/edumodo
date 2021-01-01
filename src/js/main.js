window.onload = function () {
    let a = document.querySelectorAll('.nav-link');

    function addEventListener () {
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener('click', toggleNavbar);
            a[i].addEventListener('click', scrollTo);
        }
    }
    
    addEventListener();
    
    function toggleNavbar() {
        document.querySelector('.navbar-collapse').classList.toggle('show');
    }
    
    function scrollTo(e) {
        e.preventDefault();
        for (let i = 0; i < a.length; i++) {
            const blockID = a[i].getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}