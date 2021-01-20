const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElm = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
  
console.log('open hamburger');

if(header.classList.contains('open'))
 //Close Hamburger Menu
{
  header.classList.remove('open');
  fadeElm.forEach(function(element){
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  })
}  else {
  header.classList.add('open');
  fadeElm.forEach(function(element){
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  })
}
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length){slideIndex = 1}
  if(n < 1){ slideIndex = slides.length}
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}