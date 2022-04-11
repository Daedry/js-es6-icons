/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe 
del primo array in minuscolo e con l’iniziale maiuscola.
*/

const firstName = ['giacomo', 'MAURIZIO', 'alberto', 'sandro']

console.log(firstName);

const newO = firstName.map((capitalize) => {
    return capitalize.charAt(0).toUpperCase() + capitalize.substring(1).toLowerCase()
})

console.log(newO);
