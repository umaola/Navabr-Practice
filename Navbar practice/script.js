const burger = document.querySelector('.burger');

burger.onclick = function(){
    navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle("active");
}