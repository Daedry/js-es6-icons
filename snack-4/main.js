/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il 
nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const infos = [
    {
        name:'Diego',
        surname:'Alvares',
        age:'19',
    },

    {
        name:'Augusto',
        surname:'Russo',
        age:'15',
    },

    {
        name:'Luigi',
        surname:'Foresta',
        age:'18',
    },

    {
        name:'Gaia',
        surname:'Immacolata',
        age:'17',
    },

    {
        name:'Margherita',
        surname:'Beneventi',
        age:'23',
    },

    {
        name:'Albert',
        surname:'Delgado',
        age:'14',
    },

    {
        name:'Simon',
        surname:'Crema',
        age:'45',
    },

    {
        name:'Valeria',
        surname:'Magnani',
        age:'21',
    },
]

const drievers = infos.filter((info) => {
    if(info.age < 18){
        console.log(`${info.name} ${info.surname} non è abilitato alla guida`)
    } else {
        console.log(`${info.name} ${info.surname} è abilitato alla guida`)
    }
})

console.log(drievers)

