// Lista niveles para sidebar. (comienza-juego.js)
function escribeNiveles() {
  var menuNiveles = document.querySelector(".selecciona-nivel ul");
  // solo tomaremos el indice del array
  niveles.forEach(function(elemento, indice) {
    var controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivelb' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
	//crea hijos li de ul
    menuNiveles.appendChild(controlNivel);
  });
}


// cambiaNivel e inicia al click en lista sidebar. (comienza-juego.js)
function cambiaNivel() {
  //recogemos el nivel dado click y parseamos a int
  var nivel = parseInt(this.dataset.nivel);
  //modifica variable global nivelActual
  nivelActual = nivel;
  //actualizaNivel en header. (cambia-nivel.js)
  actualizaNivel();	
  //setea inicio de juego considerando el nivel. (iniciar.js)
  iniciar();									
}


// Muestra niveles (...), sidebar. (comienza-juego.js)
function muestraMenuNiveles(evento) {
  // (...) es parte del body, conflicto con clickFueraDeMenu.
  evento.stopPropagation(); //para propagacion hacia el body
  // toggle anade y/o remueve una clase al hacer click.
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}


// oculta sidebar. Funcion usada al dar click en X o escape.
function ocultaMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}


// Se incova al hacer click en body, cierra sidebar. 
// (...) es parte del body poner stopPropagation en muestraMenuNiveles para parar efecto de cierre sidebar.
function clickFueraDeMenu(evento) {
 //evento.target es el elmento del dom hecho click (main, header, etc)
 //closest(".class") busca desde donde estoy si el padre o abuelo tiene la classe indicada.
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  ocultaMenuNiveles();
  //document.querySelector(".selecciona-nivel").classList.remove("visible");
}


// tecla escape cierra sidebar
function teclaEscCierraMenu(evento) {
  //console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
