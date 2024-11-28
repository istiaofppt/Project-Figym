/*=============== SHOW MENU ===============*/
const navMenu =  document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }
)}

/*=============== MENU  HEADER ===============*/
/* Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    }
)}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.remov-menu')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click eche nav__linck , we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))