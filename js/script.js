"use strict"

const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');
const allBody = document.body;
const introToggle = document.querySelector('.intro__toggle');
const introLang = document.querySelector('.intro__lang');
const linkStyle = document.querySelector('a#french-lang-link');
const linkStyle2 = document.querySelector('a#english-lang-link');
// const menuLink = document.querySelector('a.menu__link');
// const linkAdd = menuLink.getAttribute('href');
const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');
const link4 = document.querySelector('#link4');
const link5 = document.querySelector('#link5');


menuBurger.addEventListener('click', function(){
if (menuBody.classList.contains('_active')){
menuBurger.classList.remove('_active');
menuBody.classList.remove('_active');	
document.body.style.cssText = '';
} else{
menuBurger.classList.add('_active');
menuBody.classList.add('_active');	
document.body.style.cssText = `overflow: hidden`;
}
})

menuBurger.addEventListener('click', function(){
if(menuBody.classList.contains('_active')){
introToggle.style.gap = '60vh';
introLang.style.cssText = `display: block; margin: 0; transform: none; writing-mode: vertical-lr; z-index: 15;`;
linkStyle.style.cssText = `text-transform: uppercase;	font-size: 34px; line-height: 42px; font-weight: 700; color: #828282;`;
linkStyle2.style.cssText = `text-transform: uppercase; font-size: 34px; line-height: 42px; font-weight: 700; color: black;`;
link2.href = "index.html"; link3.href = "index.html"; link4.href = "index.html"; link5.href = "index.html";
} else{
introLang.style.cssText = `marginRight: -100px`;
introToggle.style.gap = '0px';
linkStyle.style.cssText = `text-transform: uppercase;	font-size: 16px; line-height: 20px; font-weight: 400; color: #828282;`
linkStyle2.style.cssText = `text-transform: uppercase; font-size: 16px; line-height: 20px; font-weight: 400; color: black;`
}
})


// for (link of menuLink){
// 	menuLink.href = "index.html";
// }

// slider
$(document).ready(function(){
	$('.photo__box').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		swipe:true
	});
});