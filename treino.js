var videoGames = ["Swith", "PS4", "XBOX"];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

// não se usa VAR e sim o LET é melhor

var frutas = ["banana", "uva", "pera", "maçã"];

frutas.forEach(function (fruta) {
  console.log(fruta);
});

// exercicios
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`brasil ganhou a copa de ${brasilCampeao[i]}`);
}

var frutas = ["banana", "uva", "pera", "maçã"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "pera") {
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];
