const listadoEventos = {
  data: [
    {
      img: "/assets/img/eventImages/music01.png",
      eventName: "Musica a Cielo Abierto",
      date: "02/06/2023",
      location: "Santa Fe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Musica",
      day: "SABADO"
    },
    {
      img: "/assets/img/eventImages/kids01.png",
      eventName: "Festival de Verano",
      date: "02/03/2024",
      location: "GBA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Niños",
      day: "SABADO"
    },
    {
      img: "/assets/img/eventImages/gastro01.png",
      eventName: "Picnic Primaveral",
      date: "02/12/2023",
      location: "CABA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Gastro",
      day: "DOMINGO"
    },
    {
      img: "/assets/img/eventImages/amusement01.png",
      eventName: "Parque de Diversiones",
      date: "02/10/2023",
      location: "Cordoba",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Ferias",
      day: "VIERNES"
    },
    {
      img: "/assets/img/eventImages/sports01.png",
      eventName: "Media Maraton",
      date: "02/03/2024",
      location: "Tandil",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum tempora provident facere.",
      category: "Deportes",
      day: "MARTES"
    }
  ]
};
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
            <a href="/components/product/details.html"><img src = ${event.img} alt = "evento"><a>
            <p>${event.date} ${event.location}</p>
            <p>
              <h5>${event.eventName}</h5><br>
              <p>${event.description}</p>
            </p>
          </div>
        `;
  });          
};
recorrerListadoYRenderizarTarjetas(); 

// el div de los filtros:

const eventsContainer = document.getElementById("events");
  // Crea y agrega las tarjetas al contenedor de eventos
listadoEventos.data.forEach(event => {
  const card = createEventCard(event);
  eventsContainer.appendChild(card);
});

// Filtra los eventos por categoría
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

// Filtra los eventos por palabra clave en el nombre
function filterEventsByName(keyword) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const eventName = card.querySelector(".event-name").innerText.toUpperCase();

    if (eventName.includes(keyword.toUpperCase())) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}

// Crea una tarjeta de evento
function createEventCard(event) {
  const card = document.createElement("div");
  card.classList.add("card", event.category, "hide");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  const link = document.createElement("a");
  link.setAttribute("href", "/components/product/details.html");

  const image = document.createElement("img");
  image.setAttribute("src", event.img);
  link.appendChild(image);
  imgContainer.appendChild(link);
  card.appendChild(imgContainer);

  const container = document.createElement("div");
  container.classList.add("container");

// ... código anterior ...

const date = document.createElement("p");
date.classList.add("date");
date.innerText = event.date;
container.appendChild(date);

const location = document.createElement("p");
location.classList.add("location");
location.innerText = event.location;
container.appendChild(location);

const name = document.createElement("h2");
name.classList.add("event-name");
name.innerText = event.eventName.toUpperCase();
container.appendChild(name);

const day = document.createElement("p");
day.classList.add("day");
day.innerText = event.day;
container.appendChild(day);

const category = document.createElement("h5");
category.classList.add("category");
category.innerText = event.category;
container.appendChild(category);

const info = document.createElement("p");
info.classList.add("event-info");
info.innerText = event.description.toUpperCase();
container.appendChild(info);

card.appendChild(container);

return card;
}

// Filtro de categorías
function filterProduct(value) {
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  if (value.toUpperCase() === button.innerText.toUpperCase()) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

filterEventsByCategory(value);
}

// Filtro de búsqueda por nombre
document.getElementById("search").addEventListener("click", () => {
const searchInput = document.getElementById("search-input").value;
filterEventsByName(searchInput);
fourCards.remove()
});

// Renderiza las tarjetas en un contenedor
function renderCards(container, cards) {
container.innerHTML = "";

cards.forEach(card => {
  const eventCard = createEventCard(card);
  container.appendChild(eventCard);
});
}

window.onload = ()=>{       
  recorrerListadoYRenderizarTarjetas()
}


