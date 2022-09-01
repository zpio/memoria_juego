// Niveles dinámicamente en sidebar. (menu-niveles.js)
escribeNiveles();

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");

// Juego Normal. (iniciar.js)
document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);

// Juego Relax. (iniciar.js)
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);

// Muestra niveles (...), sidebar. (menu-niveles.js)
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
  
// Oculta niveles (X) sidebar.  (menu-niveles.js)
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

// Cambiar nivel al click en lista del sidebar. (menu-niveles.js)
document.querySelectorAll(".nivelb").forEach(function(elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

// click body cerrar sidebar. (menu-niveles.js)
document.querySelector("body").addEventListener("click", clickFueraDeMenu);

// aplastar espape cierra sidebar. (menu-niveles.js)
document.addEventListener("keydown", teclaEscCierraMenu);

// Carga Nuevo Nivel. (cambia-nivel.js)
document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

// Reiniciar juego. (iniciar.js)
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});






