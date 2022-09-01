//nivelActual var global se actualiza en los dos modos de juego
function subeNivel() {
  nivelActual++;
}

//actualizaNivel en header. Tambien usado en reiniciar. (iniciar.js)
function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  //pintamos valor en header.
  document.querySelector("#nivel").innerText = nivelTexto;
}

// Carga Nuevo Nivel (boton). (comienza-juego.js)
function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
