/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

In JavaScript ci sono otto tipi di dati principali:
Numero: per i numeri di qualsiasi genere, interi o float;
BigInt: per i numeri interi di lunghezza arbitraria;
Stringa: per le stringhe con caratteri. Una stringa può avere zero o più caratteri, ma non esiste un tipo di dato separato per un singolo carattere;
Booleano: per valori vero o falso;
Undefined: per le variabili che non hanno un valore assegnato;
Null: per i valori vuoti;
Symbol: per i valori unici che possono essere usati come identificatori di proprietà degli oggetti;
Oggetti: possono contenere dati e metodi e sono usati per rappresentare oggetti del mondo reale;

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
Per esempio, se immaginiamo di avere una cassa piena di giocattoli, la cassa potrebbe essere rappresentata come un oggetto in JavaScript, dove ogni giocattolo sarebbe una proprietà dell'oggetto.
Potremmo avere una proprietà chiamata "numero di giocattoli" che sarebbe un numero, una proprietà chiamata "giocattolo preferito" che sarebbe una stringa, e una proprietà chiamata "è aperta" che sarebbe un valore booleano.

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
Per effettuare un'addizione dei numeri 12 e 20 in JS, è sufficiente utilizzare l'operatore di addizione + tra i due numeri:
var numero1 = 12;
var numero2 = 20;
var risultato = numero1 + numero2;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
Per creare una variabile di nome "x" in JS e assegnarle il valore 12, è sufficiente scrivere il seguente codice:
let x = 12;


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Federico";
console.log(name);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
let risultato = 4 - x;
console.log(risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john";
var name2 = "John";

console.log(name1 != name2); --> true poiché le due stringhe sono diverse.
console.log(name1.toLowerCase() == name2.toLowerCase()); --> true poiché entrambe le stringhe quando convertite in lowercase diventano "john".



