  function validacionformulario() {

  let nombre = document.getElementById("nombre").value.trim();
  let dni = document.getElementById("dni").value.trim();
  let dicc = document.getElementById("dicc").value.trim();
  let tel = document.getElementById("tel").value.trim();
  let email = document.getElementById("email").value.trim();
  let contr = document.getElementById("contr").value.trim();
  let contras = document.getElementById("contras").value.trim();

  if (nombre === "" || dni === "" || dicc === "" || tel === "" || email === "" || contr === "" || contras === "") {
    alert("Hay campos vacios en el formulario, por favor completarlos todos.");
    return false;
  }

  for (var i = 0; i < nombre.length; i++) {
    var indcarac = nombre.charCodeAt(i);
    if (!((indcarac >= 65 && indcarac <= 90) || (indcarac >= 97 && indcarac <= 122) || indcarac === 32)) {
      alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios vacios");
      return false;
    }
  }

  if (dni.length !== 8) {
    alert("el campo 'dni' debe tener 8 digitos");
    return false;
  }

  for (var i = 0; i < dicc.length; i++) {
    var indcarac = dicc.charCodeAt(i);
    if (!((indcarac >= 65 && indcarac <= 90) || (indcarac >= 97 && indcarac <= 122) || (indcarac >= 48 && indcarac <= 57) || indcarac === 32)) {
      alert("El campo 'Direccion' solo puede contener caracteres alfanuméricos y espacios vacios");
      return false;
    }
  }
  for (var i = 0; i < tel.length; i++) {
    var indcarac = tel.charCodeAt(i);
    if (!(indcarac >= 48 && indcarac <= 57)) {
      alert("El campo 'Telefono' solo puede contener caracteres numéricos");
      return false;
    }
  }
  if (contr.length !== 8) {
    alert("el campo 'contraseña' debe tener 8 digitos");
    return false;
  }

  if (contr !== contras) {
    alert("el campo 'contraseña' y repetir contraseña son diferentes y tienen que ser iguales");
    return false;
  }

  /*if (typeof (Storage) !== "undefined") {
    localStorage.setItem("nombre", "nombre");
    localStorage.setItem("dni", "dni");
    localStorage.setItem("direccion", "dicc");
    localStorage.setItem("telefono", "tel");
    localStorage.setItem("email", "email");
    localStorage.setItem("contraseña1", "contr");
    localStorage.setItem("contraseña2", "contras");
    console.log("Datos guardados");
  }
  else {
    console.log("Web Storage no soportado")
  }

  if (typeof (Storage) !== "undefined") {
    nombre = localStorage.getItem("nombre", "nombre");
    dni = localStorage.getItem("dni", "dni");
    dicc = localStorage.getItem("direccion", "dicc");
    tel = localStorage.getItem("telefono", "tel");
    email = localStorage.getItem("email", "email");
    contr = localStorage.getItem("contraseña1", "contr");
    contras = localStorage.getItem("contraseña2","contras");
    console.log(nombre + "," + dni + "," + dicc + "," + tel + "," + email + "," + contr + "," + contras);
  } else {
    console.log("Web Storage no soportado");
  }*/
}
  
 

