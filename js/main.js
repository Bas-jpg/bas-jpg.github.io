// deze button rederect je naar de about section van de pagina
const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener('click', () => {
    window.location.replace('http://127.0.0.1:5500/index.html#about-me')
 });

 // deze button rederect je naar de contact section van de pagina
 const contactBtn = document.querySelector(".contact-btn");
 contactBtn.addEventListener('click', () => {
    window.location.replace('http://127.0.0.1:5500/index.html#contact')
 });
 
// deze button rederect je naar de project section van de pagina
 const projectBtn = document.querySelector(".project-btn");
 projectBtn.addEventListener('click', () => {
    window.location.replace('http://127.0.0.1:5500/index.html#projecten')
 });