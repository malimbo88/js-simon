//myJavaScript
$(document).ready( function() {
  //VARIABILI
  var min = 1;
  var max = 10;
  var serieNumeri = 5;
  var numeriGenerati = randomNumber(serieNumeri, min, max)

  //Un alert espone 5 numeri casuali.
  alert(numeriGenerati);

  //Utente attende 30 secondi
  setTimeout(indovinaUtente(serieNumeri, numeriGenerati), 3000);

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

  //viene chiesto un numero a Utente per nVolte(var serieNumeri);
  //verifico che il numero sia tra quelli che ha genberato il computer
  function indovinaUtente (nRipetizioni, arrayNumeri) {
    var numeroUtente = 0;

    for (var count = 0; count < nRipetizioni; count++)
      numeroUtente = parseInt(prompt("Ti ricordi i numeri che hai appena visto? scrivine uno"));

      if(arrayNumeri.includes(numeroUtente)) {
        console.log("Il numero: " + numeroUtente + " Era presente. Bravo hai indovinato!")
      }else {
        console.log("Il numero: " + numeroUtente + " Non Era presente. Non hai indovinato!")
      }
  }

});
