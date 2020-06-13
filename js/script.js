//myJavaScript
$(document).ready( function() {
  //VARIABILI
  var serieNumeri = 5;
  var min = 1;
  var max = 10;
  var intervalloTimeout = 30000;
  var arrayCpu = randomArray(serieNumeri, min, max);

  //Un alert espone 5 numeri casuali.
  alert(arrayCpu);

  //Utente attende 30 secondi
  setTimeout(promptUtente, intervalloTimeout);

  //FUNZIONE
  //crea una numero Random da un Min (valore) a un Max(valore)
  //verifica se un numero e presente in arrayNumeri
  //se non e presente lo aggiungo
  //se e presente non lo aggiungo
  //ritorna un array di numeri diversi
  function randomArray (arrayLength, numeroMin, numeroMax) {
    var arrayNumeri = []; //array di numeri generati dal cpu
    while (arrayNumeri.length < arrayLength) {
      var numero = 0; // elemento numero generato con funzione Math.floor
      //crea una numero Random da un Min (valore) a un Max(valore)
      numero = Math.floor(Math.random() * numeroMax) + numeroMin;
      // verifico che il numero non sia presente in arrayNumeri
      //se e' presente NON lo aggiungo in arrayNumeri
      if (!arrayNumeri.includes(numero)){
      arrayNumeri.push(numero)
      }
    }
    return arrayNumeri
  }

  //FUNZIONE
  //viene chiesto un numero a Utente per nVolte(var serieNumeri);
  //verifico che il numero sia tra quelli che ha generato il computer
  //ritorna un array risultato
  //inserisce i risultati in array
  function promptUtente() {
    var numeroUtente = 0;
    var arrayUtente = [];
    while (arrayUtente.length < arrayCpu.length) {
      numeroUtente = parseInt(prompt("Ti ricordi i numeri che hai appena visto? scrivine uno"));
      //se il numero e compreso in lista array
      if (arrayCpu.includes(numeroUtente)){
        arrayUtente.push(" Numero: " + numeroUtente + " GIUSTO");
      }else if (isNaN(numeroUtente) || numeroUtente === "") {
        numeroUtente = parseInt(prompt("Devi scrivere un numero!"));
      }
      //se il numero NON e compreso in lista array
      else{
        arrayUtente.push(" Numero: " + numeroUtente + " ERRORE")
      }
    }
    return $(".stampa").text(arrayUtente); //stampo i risultati
  }

 });
