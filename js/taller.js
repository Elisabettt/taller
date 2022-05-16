  window.addEventListener("load", function () {
    console.log("Hola mundo");
  });
  /*function mostrarFeedback() {
    var fondoPopupFeedback = document.getElementById("contenedor-feedback");
    var seccionFormulario = document.getElementById("seccion4");

    seccionFormulario.classList.add("no-mostrar");
    fondoPopupFeedback.classList.remove("no-mostrar");
    fondoPopupFeedback.classList.add("mostrar");
    console.log("funciona");*/
  function recolectarDatos() {
    // PASOS 1 y 2: obtenemos los inputs que tienen los datos que nos interesan, y luego obtenemos el valor (los datos).

    // Nombre e email
    var inputNombre = document.getElementById("fname");
    var nombre = inputNombre.value;

    var inputMail = document.getElementById("mail");
    var mail = inputMail.value;
  var selectEstampas = document.getElementById("estampas");
    var estempasElegido = selectEstampas.value;

    var selectColores = document.getElementById("colores");
    var coloresElegido = selectColores.value;
  var spanNombre = document.getElementById("nombre-usuario");
  spanNombre.innerText = nombre;
}

  var colorSeleccionado= "amarillo";
  var texturaSeleccionada= "cuadros";
  function previsualizarBarbijo(origen,tipo){
    if (tipo =='color') {
      colorSeleccionado=origen;
    }
    if (tipo =='textura') {
      texturaSeleccionada=origen;
    }

    var nombreImagen= colorSeleccionado+" "+ texturaSeleccionada+ ".png";
    var contenedor= document.getElementById("contenedor-barbijos");
    contenedor.innerHTML= "<img class='barbijos' src='img/barbijos/" + nombreImagen + "'/>";
}

let feedback = document.getElementById("feedback");
  function openFeedback(){
    feedback.classList.add("open-feedback")
  }
  function closeFeedback(){
    feedback.classList.remove("open-feedback")
  }
