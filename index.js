const listadoEventos = [
  {
    img: "/assets/img/eventImages/music01.png",
    titulo: "Música a Cielo Abierto",
    fecha:"02/03/2024",
    lugar:"Santa Fe",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/kids01.png",
    titulo: "Festival de Verano",
    fecha:"02/03/2024",
    lugar:"GBA",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/gastro01.png",
    titulo: "Picnic Primaveral",
    fecha:"02/03/2024",
    lugar:"CABA",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    img: "/assets/img/eventImages/amusement01.png",
    titulo: "Parque de Diversiones",
    fecha:"02/03/2024",
    lugar:"Córdoba",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  }  
];

const cards = document.getElementById('cards');

function recorrerListadoYRenderizarTarjetas() {    
  cards.innerHTML = ''
    listadoEventos.forEach( evento => {
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
