
  
 const formulario = document.getElementById("formulario");
 const evento =document.getElementById("evento");
 const lugar =document.getElementById("lugar");
 const fecha =document.getElementById("fecha");
 const descripcion =document.getElementById("descripcion");
 const archivo =document.getElementById("archivo");
 const zona =document.getElementById("zona");
 
 formulario.addEventListener("submit", e=>{ e.preventDefault();
 
 console.log(evento.value);
 console.log(lugar.value);
 console.log(zona.value);
 console.log(fecha.value); 
 console.log(descripcion.value);
 console.log(archivo.value);
 });