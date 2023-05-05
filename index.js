const listadoEventos = [
  {
    img: "/assets/img/eventImages/music01.png",
    title: "Música a Cielo Abierto",
    date:"02/03/2024",
    location:"Santa Fe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    category:"music",
    day:"sabado"

  },
  {
    img: "/assets/img/eventImages/kids01.png",
    title: "Festival de Verano",
    date:"02/03/2024",
    location:"GBA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    category:"kids",
    day:"sabado"

  },
  {
    img: "/assets/img/eventImages/gastro01.png",
    title: "Picnic Primaveral",
    date:"02/03/2024",
    location:"CABA",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    category:"gastro",
    day:"sabado"
  },
  {
    img: "/assets/img/eventImages/amusement01.png",
    title: "Parque de Diversiones",
    date:"02/03/2024",
    location:"Córdoba",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    category:"amusement",
    day:"sabado"

  },
  {
    img: "/assets/img/eventImages/sports01.png",
    title: "Media Maratón",
    date:"02/03/2024",
    location:"Tandil",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    category:"sports",
    day:"sabado"

  }  
]; 

const cards = document.getElementById('cards'); 

//& RENDERIZADO DE CARDS ALEATORIOS
// Funcion para hacer las cards aleatorias
function shuffleObject(object) {
  for (let i = object.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [object[i], object[j]] = [object[j], object[i]];
  }
  return object;
}
// funcion para que solo se muestren 4 cards en la página inicio
const cuatroCards=[];
function randomElements() {
  newObj= shuffleObject([...listadoEventos]).slice(0, 4)
  for (let i = 0; i < newObj.length; i++) {
    cuatroCards.push(newObj[i])        
  }
  return cuatroCards
}
randomElements();

// Función para el renderizado de las 4 cards 
function recorrerListadoYRenderizarTarjetas() {    
  cards.innerHTML = ''
  cuatroCards.forEach( event => {
      cards.innerHTML += `
        <div>
          <a href="/components/product/details.html"><img src = ${event.img} alt = "evento"><a>
          <p>${event.date} | ${event.location} </p>
          <p>
            <b>${event.title}</b><br> 
             ${event.description}
          </p>
        </div>
      `;
    });  
};
recorrerListadoYRenderizarTarjetas();  

//& FILTROS

// función para ver TODAS las Cards cuando: se clickea en Todo | se clickea en niños | se clickea en gastro | se clickea en deportes | se clickea en musica

// función para elegir eventos de HOY

// función para elegir eventos por Día (lu/ma/mi/ju/vi/sa/do)


// función para elegir por nombre

// función para elegir por fecha

// función para elegir por lugar



