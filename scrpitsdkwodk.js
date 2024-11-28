// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').slice(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});
