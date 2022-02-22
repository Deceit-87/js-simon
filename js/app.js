console.log('ciao')
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. 
// ( con un alert )


// Dopo la chiusura dell’alert parte un timer di 30 secondi.



// Alla fine dei 30 secondi l’utente dovrà inserire, uno alla volta, 
// i numeri che ha visto precedentemente ( se li ricorda ),
//  tramite il prompt() (servirà un ciclo…?).

// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NB. l ’ordine dei numeri inseriti non importa, 
// basta che siano presenti nell’elenco di numeri iniziale.




const ARRAY_NUMERI_RDM = [];

for (let i = 0; i < 5; i++) {
const num = getRandomInt(1,100);
ARRAY_NUMERI_RDM.push( num );
console.log(num)
}
console.log(ARRAY_NUMERI_RDM)


















function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }