/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const automobili = [
    {
        marca: 'Ford',
        modello: 'Mustang',
        alimentazione: 'Benzina',
    },

    {
        marca: 'Volkswagen',
        modello: 'Passat Variant',
        alimentazione: 'Disel',
    },

    {
        marca: 'Kia',
        modello: 'Sportage',
        alimentazione: 'gpl',
    },

    {
        marca: 'Audi',
        modello: 'Avant',
        alimentazione: 'Disel',
    },

    {
        marca: 'Aston Martin',
        modello: 'Vantage',
        alimentazione: 'Benzina',
    },

    {
        marca: 'Alfa Romeo',
        modello: 'Stelvio',
        alimentazione: 'Disel',
    },

    {
        marca: 'Audi',
        modello: 'A1 Sportback 25 TFSI',
        alimentazione: 'Benzina',
    },

    {
        marca: 'Dacia',
        modello: 'Sandero',
        alimentazione: 'gpl',
    },
    
    {
        marca: 'Hyundai',
        modello: 'i20',
        alimentazione: 'gpl',
    },

    {
        marca: 'Bentley',
        modello: 'Flying Spur V8',
        alimentazione: 'Benzina',
    },
]

const auto_a_benzina = automobili.filter( () => {
    return automobili.alimentazione !== 'gpl' &&  automobili.alimentazione != 'Disel';
    // return automobili.alimentazione === 'Benzina';
}) 

console.log(auto_a_benzina)


const auto_a_disel = automobili.filter( () => {
    return automobili.alimentazione === 'disel';
}) 

console.log(auto_a_disel);


const auto_a_gpl = automobili.filter( () => {
    return automobili.alimentazione === 'gpl';
}) 

console.log(auto_a_gpl)
