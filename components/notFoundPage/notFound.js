//FALTA CONECTAR A EVENTO 
const eventNotFoud = document.querySelector(".not-found");

const notFoundEvent = `
<h2>OOPS... Evento no encontrado!</h2>
<img src="/assets/img/icons/404-error.png"alt="notFound"></img>
<p>Por favor regresa a <a href="https://parque.netlify.app/">INICIO</a> y realiza una nueva búsqueda</p>


`;

// Agregar el contenido dinámico a la cabecera
eventNotFoud.innerHTML = notFoundEvent;