const burger = document.querySelector('.header__burder');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav__item');
const body = document.body; 

 burger.addEventListener('click', event =>{
 	if (nav.classList.contains('show-nav')){
 		closeNav();
 	}	else{
 		showNav()
 	}
 })

  navLinks.forEach(item=>{
  	item.addEventListener('click', event =>{
 		closeNav();
 })});

 function showNav(){
 	nav.classList.add('show-nav')
 	burger.classList.add('burger-switch')
 	body.classList.add('no-scroll')
 }


 function closeNav(){
 	nav.classList.remove('show-nav')
 	burger.classList.remove('burger-switch')
 	body.classList.remove('no-scroll') 	
 }