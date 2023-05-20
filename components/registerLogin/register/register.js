function validacionformulario(){
let Nom = document.getElementById("Nom").value.trim();
let dni = document.getElementById("dni").value.trim();
let Dir = document.getElementById("Dir").value.trim();
let Tel = document.getElementById("Tel").value.trim();
let email = document.getElementById("email").value.trim();
let contr = document.getElementById("contr").value.trim();
let contras = document.getElementById("contras").value.trim();


if( Nom==="" || dni===""|| Dir===""|| Tel==="" || email==="" || contr==="" || contras===""){
    alert("Hay campos vacios en el formulario, por favor completarlos todos.")
    return false;
}

for (var i=0; i<Nom.length; i++) {
  var indcarac= Nom.charCodeAt(i);
  if (!((indcarac>=65 && indcarac<=90) || (indcarac>=97 &&indcarac<=122) || indcarac===32)) {
  alert ("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios vacios");
  return false;
}
}

if(dni.length !== 8) {
  alert ("el campo 'dni' debe tener 8 digitos");
  return false;
}
for (var i=0; i<Dir.length; i++) {
  var indcarac= Dir.charCodeAt(i);
  if (!((indcarac>=65 && indcarac<=90) || (indcarac>=97 &&indcarac<=122) || (indcarac>=0 && indcarac<=9)indcarac===32)) {
  alert ("El campo 'Dir' solo puede contener caracteres alfanuméricos y espacios vacios");
  return false;
}
}
}