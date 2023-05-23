//FALTA CONECTAR A EVENTO 
const eventDetails = document.querySelector(".event-details");

const contenidoEvento = `
    <div class="event-name">        
        <h1>Nombre de mi Evento</h1>
    </div>
    <div class="not-ready"><span><p>👷🏻‍♀️  ⚠️PÁGINA EN CONSTRUCCIÓN⚠️ 👷🏻</p></span></div>
    <div class="slider-frame">
        <div class="slider-images">
            <img src="/assets/img/eventImages/music01.png" alt="">
            <img src="/assets/img/eventImages/sports01.png" alt="">
            <img src="/assets/img/eventImages/amusement01.png" alt="">
        </div>
        <ul class="dots">
            <li class="dot"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul>
    </div>
    <div class="event-info">      
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos rem doloribus dignissimos porro consequuntur vel dolore non! Minus incidunt vel accusamus quo reiciendis quam iste aut itaque nemo odit!
        </p>
    </div>

    <section>
        <div class="event-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.324669020086!2d-58.41948828492757!3d-34.570650580468026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59e37604cd7%3A0xe1f378f0dcf68992!2sPaseo%20El%20Rosedal%20Garden!5e0!3m2!1sen!2sar!4v1678715487129!5m2!1sen!2sar" width="600" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
        </div>

        <aside class="info-container">
            <h3>FECHA</h3>
            <p class="date">22/09/2023</p>
            <h3>LUGAR</h3>
            <p class="location">Palermo</p>
            <div class="guardar-evento">
                <a href="#"><button class="guardarEvento">GUARDAR EVENTO</button></a>
            </div>
    </section>
</aside>


`;

// Agregar el contenido dinámico a la cabecera
eventDetails.innerHTML = contenidoEvento;
