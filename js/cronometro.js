function iniciaCronometro() {
  var segundos = 10;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  //actualizaContador() se ejecuta cada segundo.
  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro); //cancela el temporizador
      timeOver();  //muestra mensaje time over (game-over)
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
	//pintamos seg y min en header cada seg
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  
  //setInterval llama a actualizaContador a un intervalo de 1 seg.
  cronometro = setInterval(actualizaContador, 1000);
  //cronometro almacena un id del temporizador, se usa con clearInterval
}
