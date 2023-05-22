// hay que arreglar la captura de propiedades y conectar a api https://parque-api.netlify.app/db.json
const listadoEventos = {
  data: [
  {
      img: "https://github.com/Gigi-U/proyectoIntegrador/blob/main/assets/img/eventImages/music01.png?raw=true",
      eventName: "MUSICA A CIELO ABIERTO",
      date: "02/06/2023",
      location: "Santa Fe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Musica",
      day: "SABADO"
  },
  {
      img: "https://raw.githubusercontent.com/Gigi-U/proyectoIntegrador/main/assets/img/eventImages/kids01.png",
      eventName: "FESTIVAL DE VERANO",
      date: "02/03/2024",
      location: "GBA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Niños",
      day: "SABADO"
  },
  {
      img: "https://raw.githubusercontent.com/Gigi-U/proyectoIntegrador/main/assets/img/eventImages/gastro01.png",
      eventName: "PICNIC PRIMAVERAL",
      date: "02/12/2023",
      location: "CABA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Gastro",
      day: "DOMINGO"
  },
  {
      img: "https://raw.githubusercontent.com/Gigi-U/proyectoIntegrador/main/assets/img/eventImages/amusement01.png",
      eventName: "PARQUE DE DIVERSIONES",
      date: "02/10/2023",
      location: "Cordoba",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Ferias",
      day: "VIERNES"
  },
  {
      img: "https://raw.githubusercontent.com/Gigi-U/proyectoIntegrador/main/assets/img/eventImages/sports01.png",
      eventName: "MEDIA MARATON",
      date: "02/03/2024",
      location: "Tandil",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Deportes",
      day: "MARTES"
  }
  ]
};
// ---------------DIV MAIN-EVENTS-------------------------------------
const fourCards = document.getElementById('main-events'); 
// Función para hacer el div de las cards aleatorias
function shuffleObject(object) {
  for (let i = object.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [object[i], object[j]] = [object[j], object[i]];
  }
  return object;
}
// funcion para filtrar 4 cards de la lista
const cuatroCards=[];
function randomElements() {
  newObj= shuffleObject([...listadoEventos.data]).slice(0, 4)
  for (let i = 0; i < newObj.length; i++) {
      cuatroCards.push(newObj[i])        
  }
  return cuatroCards
}
randomElements();
// Función para el renderizado del div de las 4 cards 
function recorrerListadoYRenderizarTarjetas() {    
  fourCards.innerHTML = ''
  cuatroCards.forEach( event => {
      fourCards.innerHTML += `
          <div>
            <a href="/components/product/details.html"><img src = ${event.img} alt = "evento" class="img"></a>
            <p class="date">${event.date}</p><p class="location">${event.location}</p>
            <h2 class="event-name">${event.eventName}</h2>
            <p class="event-info">${event.description}</p>            
          </div>
        `;
  });          
};
recorrerListadoYRenderizarTarjetas(); 

// ---------------DIV EVENTS -------------------------------------
const eventsContainer = document.getElementById("events");

// recorre la data del Listado de eventos y se prepara para "tirar" la info en las cards
listadoEventos.data.forEach(event => {
  const card = createEventCard(event);
  eventsContainer.appendChild(card);
});


// Crea el "molde" de las cards
function createEventCard(event) {
  const card = document.createElement("div");
  card.classList.add("card", event.category, "hide");

  const link = document.createElement("a");
  link.setAttribute("href", "/components/product/details.html");

  const image = document.createElement("img");
  image.setAttribute("src", event.img);
  image.classList.add("img");
  link.appendChild(image);
  card.appendChild(link);

  const date = document.createElement("p");
  date.classList.add("date");
  date.innerText = event.date;
  card.appendChild(date);

  const location = document.createElement("p");
  location.classList.add("location");
  location.innerText = event.location;
  card.appendChild(location);

  const name = document.createElement("h2");
  name.classList.add("event-name");
  name.innerText = event.eventName;
  card.appendChild(name);

  const day = document.createElement("p");
  day.classList.add("day");
  day.innerText = event.day;
  card.appendChild(day);

  const category = document.createElement("h5");
  category.classList.add("category");
  category.innerText = event.category;
  card.appendChild(category);

  const info = document.createElement("p");
  info.classList.add("event-info");
  info.innerText = event.description;
  card.appendChild(info);

return card;
}

// Renderiza las tarjetas en un contenedor
function renderCards(container, cards) {
  container.innerHTML = "";
  
  cards.forEach(card => {
    const eventCard = createEventCard(card);
    container.appendChild(eventCard);
  });
  }
  
// ---------------FILTROS-------------------------------------
// Filtra los eventos por categoría y elimina el div main-events
function filterEventsByCategory(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.classList.remove("hide");
      fourCards.remove();

    } else {
      card.classList.add("hide");
      fourCards.remove();

    }
  });
}

function filterProduct(value) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    }else {
      button.classList.remove("active");
    }
  });
  filterEventsByCategory(value);
}

// Filtro de búsqueda por nombre
function filterEventsByName(keyword) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const eventName = card.querySelector(".event-name").innerText;
    if (eventName.includes(keyword.toUpperCase()) || eventName.includes(keyword) ) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}
// botón lupa y elimina el DIV main-events
document.getElementById("search").addEventListener("click", () => {
const searchInput = document.getElementById("search-input").value;
filterEventsByName(searchInput);
fourCards.remove()
});

// indica que al entrar a la página y/o refrescarla, vamos a ver los 4 divs aleatorios de main-events
window.onload = ()=>{       
  recorrerListadoYRenderizarTarjetas()
}


