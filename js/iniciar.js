function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas); //pinta tarjetas en DOM (baraja-reparte.js)
  document.querySelector("#mov").innerText = "00"; //pinta 00 mov-numerador
  maxContador(); 	//pinta mov-total teorico header (contador.js)
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir); //(descubrir-comparar.js)
  });

  if (!modoRelax) {
    iniciaCronometro(); //(cronometro.js)
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

//al clic boton reiniciar (comienza-juego.js)
function reiniciar() {
  nivelActual = 0; //var global
  actualizaNivel(); //actualizaNivel en header. (cambia-nivel.js)
  iniciar();
}

function iniciaJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}





