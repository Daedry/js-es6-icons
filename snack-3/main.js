/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [
    {
        nome: 'Ocelot',
        famiglia:'Felidi',
        classe:'Mammiferi',
    },

    {
        nome: 'Caracal',
        famiglia:'Felidi',
        classe:'Mammiferi',
    },

    {
        nome: 'Yaguarondi',
        famiglia:'Felidi',
        classe:'Mammiferi',
    },

    {
        nome: 'Strigiformi',
        famiglia:'Strigiformes',
        classe:'Uccelli',
    },

    {
        nome: 'Pinguini',
        famiglia:'Spheniscidae',
        classe:'Uccelli',
    },

    {
        nome: 'Margay',
        famiglia:'Felidi',
        classe:'Mammiferi',
    },

    {
        nome: 'Trochilidi',
        famiglia:'Trochilidae',
        classe:'Uccelli',
    },
]

const only_mammals = animals.filter((mammals) => {
    return mammals.classe === 'Mammiferi'
})

console.log('Questi animali sono mammiferi: ', only_mammals)

const not_mammals = animals.filter((notMammals) => {
    return notMammals.classe !== 'Mammiferi'
})

console.log('Questi animali non sono mammiferi: ', not_mammals)
