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

const cards = document.getElementById('cards')
const btn = document.getElementsByClassName('btn')
const kidsBtn = document.getElementById('filter-kids')

//const kidsBtn = document.getElementById('filter-kids')

kidsBtn.addEventListener("click", filtros);

/* CUANDO FUNCIONE  con una categoria agrego el resto
const allBtn = document.querySelector("#filter-all");
const kidsBtn = document.querySelector("#filter-kids");
const gastroBtn = document.querySelector("#filter-gastro");
const sportsBtn = document.querySelector("#filter-sports");
const musicBtn = document.querySelector("#filter-music");
const todayBtn = document.querySelector("#filter-today");
const dayBtn = document.querySelector("#filter-day");

allBtn.addEventListener("click", filtros);
kidsBtn.addEventListener("click", filtros);
gastroBtn.addEventListener("click", filtros);
sportsBtn.addEventListener("click", filtros);
musicBtn.addEventListener("click", filtros);
todayBtn.addEventListener("click", filtros);
dayBtn.addEventListener("click", filtros);
*/

//notifica x mensaje en consola qué botón se clickeó
document.querySelectorAll('button').forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function() {
      console.log('A button with ID ' + id + ' was clicked!') 
    } );
});

const cuatroCards=[];
const byOneFilter = [];
const byMultipleFilters=[];


function filtros() { 
  // para aplicar el renderizado de cards si no se hace click en los botones de filtros (TRAE 4 CARDS)
  if (btn.clicked !== true) {
    // mezcla las 4 cards cada vez q se actualiza la pagina - ESTO ESTÁ OK
    function shuffleObject(object) {
      for (let i = object.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [object[i], object[j]] = [object[j], object[i]];
      }
      return object;
    }
    // selecciona 4 cards - ESTO ESTÁ OK
    function randomElements() {
      newObj= shuffleObject([...listadoEventos]).slice(0, 4)
      for (let i = 0; i < newObj.length; i++) {
      cuatroCards.push(newObj[i])        
      }
      return cuatroCards
    }
    randomElements();        
 
  }else{
    //aplica el renderizado por FILTROS al hacer click en estos - ESTO NO ME SALE
    function elementsByCategory() {
      if(kidsBtn.clicked == true){
        // filtra los eventos por categoría kids
        eventoFiltrado = listadoEventos.some((e) =>{
          e.category  === "kids"
        })
        // llena el array byOneFilter para q su info pase a las cards       
        for (let i = 0; i < eventoFiltrado.length; i++) {
          cuatroCards.push(eventoFiltrado[i])        
        }
        return cuatroCards
      }            


    }
  elementsByCategory();    
  }
  // Función para el renderizado de las Cards con o sin filtro - ESTO ESTÁ OK
  function recorrerListadoYRenderizarTarjetas() {    
    cards.innerHTML = ''
    cuatroCards.forEach( event => {
        cards.innerHTML += `
        <div>
          <a href="/components/product/details.html"><img src = ${event.img} alt = "evento"><a>
          <p>${event.date} | ${event.location} </p>
          <p><b>${event.title}</b><br> ${event.description}</p>
        </div>
        `;
    });  
  };
  recorrerListadoYRenderizarTarjetas();     
} 
filtros();              
