/*======== footer year =======*/
let yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*======== menu icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*======== Projects dropdown =======*/
let dropdownToggle = document.querySelector('.dropdown-toggle');
let navItem = dropdownToggle ? dropdownToggle.closest('.nav-item') : null;

if (dropdownToggle && navItem) {
    dropdownToggle.onclick = (e) => {
        if (window.innerWidth <= 990) {
            e.preventDefault();
            navItem.classList.toggle('open');
        }
    };
}



/*======== scroll sections active link =======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));

            if (id === 'portfolio' || id === 'analysis') {
                if (dropdownToggle) dropdownToggle.classList.add('active');
            } else {
                let link = document.querySelector('header nav a[href*=' + id + ']');
                if (link) link.classList.add('active');
            }
        };
    });


/*======== sticky navbar =======*/

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*======== remove menu icon navbar when click navbar link (scroll)=======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
if (navItem) navItem.classList.remove('open');

};

/*======== dark light mode =======*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*======== scroll reveal =======*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .experience-container, .card-content, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .about-content p, .about-content', { origin: 'right' });

