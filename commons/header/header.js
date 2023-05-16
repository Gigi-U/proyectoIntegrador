// Selecciono el Div Cabecera a traves de la clase cabecera. dentro de éste se va a agregar lo que cree en Js.
const cabeceraElement = document.querySelector(".cabecera");

// Creo el contenido dinámico para la cabecera
const contenidoCabecera = `
    <div class="logo">        
        <a href="https://parque.netlify.app/"><img src="/assets/img/logo/camping.png" alt="instagram"></a>
        <a href="https://parque.netlify.app/"><p>PARQUE</p></a>
    </div>
    <div class="registroLogin">            
        <a href="/components/registerLogin/register/register.html"><button class="registro">REGISTRO</button></a>
        <a href="/components/registerLogin/login/login.html"><button class="login">LOGIN</button></a>
    </div>
    <div class="burger"><i class='fa fa-bars white-color'></i></div>
`;

// Agregar el contenido dinámico a la cabecera
cabeceraElement.innerHTML = contenidoCabecera;
