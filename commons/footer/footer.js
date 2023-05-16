// Selecciono el footer a traves de su clase. Dentro de éste se va a agregar lo que cree en Js.
const footerElement = document.querySelector(".footer");

// Creo el contenido dinámico para el footer
const contenidoFooter = `
        <p>2023 PARQUE    .  Privacy   .   Terms</p>
        <div class="redesSociales">
            <a href="#"><img src="/assets/img/icons/instagram.png" alt="instagram">
            </a>
            <a href="#"><img src="/assets/img/icons/facebook.png" alt="facebook">
            </a>
            <a href="#"><img src="/assets/img/icons/gorjeo.png" alt="tweeter">
            </a>
        </div>
`;

// Agrego el contenido dinámico a el footer
footerElement.innerHTML = contenidoFooter;
