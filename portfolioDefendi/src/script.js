const pageTitle = document.querySelector('title');
pageTitle.textContent = 'Meu Portfolio';

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});