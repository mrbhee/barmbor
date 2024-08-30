document.getElementById('menuToggle').addEventListener('click', function(){
var container = document.querySelector('.menu-container');
var hamburgerIcon = document.querySelector('.menu-toggle .hamburger');
var cancelIcon = document.querySelector('.menu-toggle .cancel');

container.classList.toggle('menu-visible');
hamburgerIcon.styles.display = container.classList.contains('menu-visible') ? 'none': 'block';
})