// smooht scroll here keirfjaweu902que0q8ue8qu892we
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').slice(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});
