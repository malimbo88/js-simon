//myJavaScript
$(document).ready( function() {
  //VARIABILI
  var min = 1;
  var max = 10;
  var serieNumeri = 5;

  //Un alert espone 5 numeri casuali.
  alert(randomNumber(serieNumeri, min, max));

});

//FUNZIONI
//crea una numero(valore) di cifre Random da un Min (valore) a un Max(valore)
//inserisce i numeri generati in un array
//ritorna un array
function randomNumber (numeroCount, numeroMin, numeroMax) {
  var arrayNumeri = [];
  var numero = 0;
  while (arrayNumeri.length < numeroCount) {
    numero = Math.floor(Math.random() * numeroMax) + numeroMin;  // returns a random integer from 1 to 10;
    // verifico che il numero non sia presente in arrayNumeri
    //se e' presente NON lo aggiungo in arrayNumeri
    if(arrayNumeri.includes(numero)) {
    }
    //se NON e' presente lo aggiungo in arrayNumeri
    else {
      arrayNumeri.push(numero);
    }
  }

  return arrayNumeri;
}
