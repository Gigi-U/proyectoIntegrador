// Selecciono el Div Cabecera a traves de la clase cabecera. dentro de éste se va a agregar lo que cree en Js.
const cabeceraElement = document.querySelector(".cabecera");

// Creo el contenido dinámico para la cabecera
const contenidoCabecera = `
    <div class="logo-fijo"> 
        <div class="logo"> 
            <div>      
                <a href="https://parque.netlify.app/"><img src="/assets/img/logo/camping.png" alt="instagram"></a>
            </div>      
            <div>     
                <a href="https://parque.netlify.app/"><p>PARQUE</p></a>
            </div> 
        </div>
    </div>
    <input type ="checkbox" id="menu-check">
    <label id="menu" for="menu-check">
        <span id="menu-abrir">&#9776;</span>
        <span id="menu-cerrar">x</span>
    </label>
    <nav class="desplegable-burguer">
        <div class="logo"> 
            <div>      
                <a href="https://parque.netlify.app/"><img src="/assets/img/logo/camping.png" alt="instagram"></a>
            </div>      
            <div>     
                <a href="https://parque.netlify.app/"><p>PARQUE</p></a>
            </div> 
        </div>
        <div class="registro-login">
            <div>
                <a href="/components/registerLogin/register/register.html"><button class="registro">REGISTRO</button></a>
            </div>
            <div>        
                <a href="/components/registerLogin/login/login.html"><button class="login">LOGIN</button></a>
            </div>

        </div>
    </nav>

`;

// Agregar el contenido dinámico a la cabecera
cabeceraElement.innerHTML = contenidoCabecera;
