window.addEventListener("load", function () {
  console.log("Hola mundo");
  });
  function mostrarFeedback() {
    var fondoPopupFeedback = document.getElementById("contenedor-feedback");
    var seccionFormulario = document.getElementById("seccion4");

    seccionFormulario.classList.add("no-mostrar");
    fondoPopupFeedback.classList.remove("no-mostrar");
    fondoPopupFeedback.classList.add("mostrar");
  }
  function recolectarDatos() {
    // PASOS 1 y 2: obtenemos los inputs que tienen los datos que nos interesan, y luego obtenemos el valor (los datos).

    // Nombre e email
    var inputNombre = document.getElementById("fname");
    var nombre = inputNombre.value;

    var inputMail = document.getElementById("mail");
    var mail = inputMail.value;

    // Select de estampas
    var selectEstampas = document.getElementById("estampas");
    var estempasElegido = selectEstampas.value;

    // Select de colores
    var selectColores = document.getElementById("colores");
    var coloresElegido = selectColores.value;

    // PASO 3: obtenemos los lugares del html donde nos interesa MOSTRAR los datos que ingresó el usuario
    var spanNombre = document.getElementById("nombre-usuario");


    // PASO 4: ponemos las variables que obtuvimos en el paso 2, en los elementos html que obtuvimos en el paso 3
    spanNombre.innerText = nombre;
}


    function resetearFormulario() {
      var inputNombre = document.getElementById("fname");
      var inputMail = document.getElementById("mail");
      inputNombre.value = "";
      inputMail.value = "";
    }
    function enviarFormulario(e) {
      recolectarDatos();
      mostrarFeedback();
      resetearFormulario();
  
    }
  function cerrarFeedback() {
    var seccionFormulario = document.getElementById("seccion4");
    var fondoPopupFeedback = document.getElementById("contenedor-feedback");

    fondoPopupFeedback.classList.remove("mostrar");
    fondoPopupFeedback.classList.add("no-mostrar");
    seccionFormulario.classList.remove("no-mostrar");
  }
