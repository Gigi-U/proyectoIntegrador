const listadoEventos = [
  {
    img: "/assets/img/eventImages/music01.png",
    titulo: "Música a Cielo Abierto",
    fecha:"02/03/2024",
    lugar:"santa fe",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/kids01.png",
    titulo: "Festival de Verano",
    fecha:"02/03/2024",
    lugar:"gba",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/gastro01.png",
    titulo: "Picnic Primaveral",
    fecha:"02/03/2024",
    lugar:"caba",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/amusement01.png",
    titulo: "Parque de Diversiones",
    fecha:"02/03/2024",
    lugar:"cordoba",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  }  
];

const cards = document.getElementById('cards');

function recorrerListadoYRenderizarTarjetas() {    
  cards.innerHTML = ''
    listadoEventos.forEach( evento => {
      cards.innerHTML += `
        <div>
          <a href="/components/product/details.html"><img src = ${evento.img} alt = "lenguajes"><a>
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