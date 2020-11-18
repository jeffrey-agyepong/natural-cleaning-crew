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