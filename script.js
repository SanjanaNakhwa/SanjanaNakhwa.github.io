const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.oneclick =  () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

