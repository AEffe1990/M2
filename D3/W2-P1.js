/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function findLargestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Esempio
console.log(findLargestNumber(10, 5)); // Output: 10
console.log(findLargestNumber(-2, 8)); // Output: 8

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkNumber(num) {
  if (num !== 5) {
    console.log("not equal");
  }
}

// Esempio
checkNumber(3); // Output: not equal
checkNumber(5); // Nessun output
checkNumber(8); // Output: not equal

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkDivisible(num) {
  if (num % 5 === 0) {
    console.log("divisible by 5");
  }
}

// Esempio
checkDivisible(15); // Output: divisible by 5
checkDivisible(7); // Nessun output
checkDivisible(20); // Output: divisible by 5

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkNumbers(num1, num2) {
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Esempio
checkNumbers(4, 8); // Output: true
checkNumbers(2, 6); // Output: false
checkNumbers(10, 2); // Output: true

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkoutTotal(totalShoppingCart) {
  if (totalShoppingCart > 50) {
    console.log("Il totale addebitato all'utente è: " + totalShoppingCart);
  } else {
    console.log("Il totale addebitato all'utente è: " + (totalShoppingCart + 10));
  }
}

// Esempio
checkoutTotal(20); // Output: Il totale addebitato all'utente è: 30
checkoutTotal(30); // Output: Il totale addebitato all'utente è: 40
checkoutTotal(40); // Output: Il totale addebitato all'utente è: 50
checkoutTotal(60); // Output: Il totale addebitato all'utente è: 60
checkoutTotal(80); // Output: Il totale addebitato all'utente è: 80
checkoutTotal(90); // Output: Il totale addebitato all'utente è: 80


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkoutTotal(totalShoppingCart) {
  var discount = 0.2; // Sconto del 20%
  var shippingCost = 10; // Costo fisso della spedizione
  var discountedTotal = totalShoppingCart * (1 - discount);
  if (discountedTotal > 50) {
    shippingCost = 0;
  }
  var total = discountedTotal + shippingCost;
  console.log("Il totale addebitato all'utente è: " + total);
}

// Esempio
checkoutTotal(40); // Output: Il totale addebitato all'utente è: 48
checkoutTotal(60); // Output: Il totale addebitato all'utente è: 48
checkoutTotal(80); // Output: Il totale addebitato all'utente è: 64

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num1 = 10;
var num2 = 5;
var num3 = 20;

if (num1 > num2) {
  if (num2 > num3) {
    console.log(num1 + ", " + num2 + ", " + num3);
  } else if (num1 > num3) {
    console.log(num1 + ", " + num3 + ", " + num2);
  } else {
    console.log(num3 + ", " + num1 + ", " + num2);
  }
} else {
  if (num1 > num3) {
    console.log(num2 + ", " + num1 + ", " + num3);
  } else if (num2 > num3) {
    console.log(num2 + ", " + num3 + ", " + num1);
  } else {
    console.log(num3 + ", " + num2 + ", " + num1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num = 8;

if (typeof(num) === "number" && num % 1 === 0) {
  console.log(num + " è un numero intero.");
} else {
  console.log(num + " non è un numero intero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num = 5;

if (num % 2 === 0) {
  console.log(num + " è un numero pari.");
} else {
  console.log(num + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else  {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10 ma maggiore o uguale a 5");
} else {
  console.log("10 o maggiore");
}

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 12;

if (num < 5) {
  console.log("Tiny");
} else {
  if (num < 10) {
    console.log("Small");
  } else {
    if (num < 15) {
      console.log("Medium");
    } else {
      if (num < 20) {
        console.log("Large");
      } else {
        console.log("Huge");
      }
    }
  }
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender); 

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 0; i <= 10; i++) {
  console.log(i);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 0; i <= 10; i++) {
  if(i !== 3 && i !== 8) {
    console.log(i);
  }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. 
  Per ciascun elemento, il ciclo deve controllare il valore corrente sia pari o dispari e mostrare il risultato in console.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 0; i <= 15; i++) {
  if(i % 2 === 0) {
    console.log(i + " è pari");
  } else {
    console.log(i + " è dispari");
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. 
  Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let day = 3;

switch(day) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido per la variabile 'day'");
    break;
}
