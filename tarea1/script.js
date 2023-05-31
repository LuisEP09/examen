// Objeto ListaTareas
var ListaTareas = {
  tareas: [],
 //agrega tareas al arreglo
  agregarTarea: function (tarea) {
    this.tareas.push(tarea);
  },

  mostrarLista: function () {
    var listaTareasElement = document.getElementById("lista-tareas");
    

    // Aqui utilizo el bucle foreach para repetir la secuencia del arreglo de tareas y aqui creo el elemento de lista li
    this.tareas.forEach(function (tarea) {
      var tareaElement = document.createElement("li");
      tareaElement.textContent = tarea;
      listaTareasElement.appendChild(tareaElement);
    });
  }
};

function manejarSubmit(event) {//
  event.preventDefault(); // Evita qie el formulario se envie 

  var tareaInput = document.getElementById("tarea");//obtengo el elemento id tarea que esta en el HTML
  var nuevaTarea = tareaInput.value; //se contiene el valor ingresado por el usuario en el campo HTML

  if (nuevaTarea.trim() !== "") { // nueva.tarea es la variable que obtiene el valor del campo 
    ListaTareas.agregarTarea(nuevaTarea);// agregarTarea lo puse como un metodo que pertenece al objeto Listatareas para agregar una nueva tarea a la lista.
    ListaTareas.mostrarLista();//Aqui se muestra la tarea 
    tareaInput.value = ""; // aqui se hace una cadena vacia ("") esto eliminara lo que esta escrito en el campo 
  }
}

// Vincular el evento "submit" del formulario
var formulario = document.getElementById("formulario-tareas"); //aqui utilizo el metodo getElementById del objeto que en este caso es 
//document para obtener el elemento del ID formulario tareas
formulario.addEventListener("submit", manejarSubmit);
//esto lo estoy utlizando utilizando para agregar un controlador de eventos de HTML esto hace que cuando se envie el formulario
// se ejecute la funcion  manejarSubmit esto se ejeuta cuando ocurre el evento de envio del formulario.