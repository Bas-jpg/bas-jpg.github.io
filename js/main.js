// deze button rederect je naar de about section van de pagina
const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener('click', () => {
    window.location.replace('bas-jpg.github.io#about-me')
 });

 // deze button rederect je naar de contact section van de pagina
 const contactBtn = document.querySelector(".contact-btn");
 contactBtn.addEventListener('click', () => {
    window.location.replace('bas-jpg.github.io#contact')
 });
 
// deze button rederect je naar de project section van de pagina
 const projectBtn = document.querySelector(".project-btn");
 projectBtn.addEventListener('click', () => {
    window.location.replace('bas-jpg.github.io#projecten')
 });

// deze button rederect je naar de portfolio section van de pagina
 const portfolioBtn = document.querySelector(".portfolio-btn");
 portfolioBtn.addEventListener('click', () => {
    window.location.replace('bas-jpg.github.io#about-portfolio')
 });



//  pakt de paragraf
 const copyText = document.querySelector(".email");
 copyText.addEventListener('click', () => {
    // copied deze tekst en zet het op jouw klipboard
    navigator.clipboard.writeText('bdvandenberg@icloud.com');
    
    // alert dat de text is gekopied
    alert("Copied the email!");
});