// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

let user = [
  {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  },

  {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  },

  {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  },
];


// login 
let session = 0;
console.log(`Ciao ${user[session].name} ${user[session].lastName}, bentornato!`);

let prices = [130, 170, 300]; 
let shippingCost = 50;
let totalCost = 0;
let totalCart = 0;

for (let i = 0; i < prices.length; i++) {
  totalCart += prices[i];
  console.log(`Prodotto n.${i + 1}: ${prices[i]} EURO`);
}

console.log(`Totale Carrello: ${totalCart} EURO`); 




