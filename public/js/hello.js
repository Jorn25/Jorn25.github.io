const footer = document.querySelector('.footer-bottom');
const currentYear = new Date().getFullYear();
footer.textContent += ' ' + currentYear;