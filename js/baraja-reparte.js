// Recibe array emojis y baraja. Llamada en reparteTarjetas()
function barajaTarjetas(lasTarjetas) {
  var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

// Llamada en inciar(), recibe array emojis segun nivel y crea el HTML
function reparteTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
