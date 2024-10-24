const navLinks = document.querySelectorAll('.aside__link');


function setActiveLinkOnClick(event) {
  
  navLinks.forEach(link => {
    link.classList.remove('aside__link--active');
  });

  
  event.currentTarget.classList.add('aside__link--active');
}


navLinks.forEach(link => {
  link.addEventListener('click', setActiveLinkOnClick);
});