let menuToggle = document.querySelector('.menuToggle');
let navbar = document.querySelector('.navbar');
menuToggle.onclick = function(){
    navbar.classList.toggle('active');
}