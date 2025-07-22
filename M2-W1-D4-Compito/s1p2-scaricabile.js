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

const javaScript = {
    dataTypeUno: "il datatype number serve ad esprimere letteralmente un numero intero o decimale e per esegure calcoli matematici",
    dataTypeDue: "il datatype string può esprimere qualsiasi tipo di carattere, numeri o lettere ed è racchiuso dalle virgolette",
    dataTypeTre: "il datatype boolean serve a decidere se un certo dato risulta vera o falsa",
    dataTypeQuattro: "il datatype undefined esprime una variabile priva di valore ",
    dataTypeCinque: "il datatype null esprime una variabile alla quale E STATO SCELTO di non dare nessun valore",
}
console.log(javaScript)

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

const descriptionObject = "Un oggetto in javascript è una variabile alla quale sono state attribuite delle proprietà. Ad esempio se si tratta di una variabile associata ad una persona nelle sue proprietà troveremo la sua eta nome eccecc."
console.log(descriptionObject)

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const number1 = 12
const number2 = 20

const sum = number1 + number2
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "amadeus"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4 
const subtraction = (y - x) 
console.log(subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

const verify = (name1 === name2)
console.log(verify)


let name2Minuscolo =  name2.toLowerCase();
console.log(name2Minuscolo)

const verify2 = (name1 === name2Minuscolo)
console.log(verify2)

