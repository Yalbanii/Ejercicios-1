var formulario = document.querySelector("#form");
var lista = document.getElementById("lista"); //Subir al inicio

formulario.onsubmit = function(event){ //event para evitar confusiones
 event.preventDefault();
  //falta preventDefault
  //agregar if para eliminar error Cannot set properties of null (setting 'onsubmit')
 //faltan ;


    //acceder a los elementos por id
   var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = parseInt(e.value); //parse para convertir valores a int

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);
 
//agregar else if para que solo aplique una condicion a la vez
 if (nombre.length === 0) {
    n.classList.add("error")
} else if (edad < 18 || edad > 120) {
    e.classList.add("error")
} else if (nombre.length > 0 
&& (edad >= 18 
  && edad <= 120) ) {
    agregarInvitado(nombre, edad, nacionalidad);
}

/* CODIGO REPETIDO ABAJO
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);
*/
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }


var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //la propiedad es add
if (lista) {
        lista.appendChild(elementoLista);
        console.log("Invitado agregado al DOM.");
    } else {
        console.log("Error: El elemento con ID 'lista' (donde se agregan los invitados) no fue encontrado.");
        return; // Detener la ejecución si 'lista' no existe
    }

/* CODIGO REPETIDO
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.classList.add("boton-borrar"); // usar la propiedad add en el boton
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
//this.parentNode.style.display = 'none';
this.parentNode.remove();
  }
}
}