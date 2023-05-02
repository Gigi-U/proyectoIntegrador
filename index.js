const listadoEventos = [
  {
    img: "/assets/img/eventImages/music01.png",
    titulo: "Música a Cielo Abierto",
    fecha:"02/03/2024",
    lugar:"Santa Fe",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoria:"music",
    dia:"sabado"

  },
  {
    img: "/assets/img/eventImages/kids01.png",
    titulo: "Festival de Verano",
    fecha:"02/03/2024",
    lugar:"GBA",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoria:"kids",
    dia:"sabado"

  },
  {
    img: "/assets/img/eventImages/gastro01.png",
    titulo: "Picnic Primaveral",
    fecha:"02/03/2024",
    lugar:"CABA",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoria:"gastro",
    dia:"sabado"
  },
  {
    img: "/assets/img/eventImages/amusement01.png",
    titulo: "Parque de Diversiones",
    fecha:"02/03/2024",
    lugar:"Córdoba",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoria:"amusement",
    dia:"sabado"

  },
  {
    img: "/assets/img/eventImages/sports01.png",
    titulo: "Media Maratón",
    fecha:"02/03/2024",
    lugar:"Tandil",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoria:"sports",
    dia:"sabado"

  }  
]; 

const cards = document.getElementById('cards'); 


// funcion para mezclar los objetos del array listadoEventos y hacer las Cards Aleatorias
function shuffleObject(object) {
  for (let i = object.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [object[i], object[j]] = [object[j], object[i]];
  }
  return object;
}

// funcion para guardar 4 cards del array listadoEventos y guardarlas en el array cuatroCards
const cuatroCards=[];

function randomElements() {
  newObj= shuffleObject([...listadoEventos]).slice(0, 4)
  for (let i = 0; i < newObj.length; i++) {
    cuatroCards.push(newObj[i])        
}
  return cuatroCards
}
randomElements();

// Función para el renderizado de las 4 cards aleatorias de la página inicio
function recorrerListadoYRenderizarTarjetas() {    
  cards.innerHTML = ''
  cuatroCards.forEach( evento => {
      cards.innerHTML += `
        <div>
          <a href="/components/product/details.html"><img src = ${evento.img} alt = "evento"><a>
          <p>${evento.fecha} | ${evento.lugar} </p>
          <p>
            <b>${evento.titulo}</b><br> 
             ${evento.descripcion}
          </p>
        </div>
      `;
    });  
};
recorrerListadoYRenderizarTarjetas();  

// función para ver TODAS las Cards cuando: se clickea en Todo | se clickea en niños | se clickea en gastro | se clickea en deportes | se clickea en musica

// función para elegir eventos de HOY

// función para elegir eventos por Día (lu/ma/mi/ju/vi/sa/do)


// función para elegir por nombre

// función para elegir por fecha

// función para elegir por lugar



