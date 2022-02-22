
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


const DASHBOARD = document.querySelector('.message')
console.log(DASHBOARD);
const ARRAY_NUMERI_RDM = [];

for (let i = 0; i < 5; i++) {
const num = getRandomInt(1,100);
ARRAY_NUMERI_RDM.push( num );
console.log(num)
}
console.log(ARRAY_NUMERI_RDM)

alert(`${ARRAY_NUMERI_RDM.join('  ')}`)



setTimeout(userAnswer, 3000);


function userAnswer(userNum){
    const ARRAY_USER_NUM = [];
    let i = 1
    do{
       
       const userNum = parseInt(prompt(`'inserisci uno ad uno i numeri che hai visto!numero ${[i]}'`))
       if (!isNaN(userNum)){
        i++ 
        ARRAY_USER_NUM.push(userNum)
        } 
       else {
        parseInt(prompt(`'inserisci uno ad uno i numeri che hai visto!numero ${[i]}'`));

       }

       console.log(userNum);
       console.log(ARRAY_NUMERI_RDM)
    }

    while(i < 6 )

    console.log(ARRAY_USER_NUM)
    const ARRAY_NUMERI_TRUE = [];

    for (let i = 0; i < ARRAY_USER_NUM.length; i++) {
        if (ARRAY_NUMERI_RDM.indexOf(ARRAY_USER_NUM[i]) >= 0){

            ARRAY_NUMERI_TRUE.push(ARRAY_USER_NUM[i])

        }
        
    }
            console.log(ARRAY_NUMERI_TRUE);


       
    if ((ARRAY_NUMERI_TRUE.length > 1) && (ARRAY_NUMERI_TRUE.length < ARRAY_NUMERI_RDM.length))
            DASHBOARD.append(`Ti sei ricordato ${ARRAY_NUMERI_TRUE.length} numeri su ${ARRAY_NUMERI_RDM.length}!
            ${ARRAY_NUMERI_TRUE}`)

    else if (ARRAY_NUMERI_TRUE.length = ARRAY_NUMERI_RDM.length){
        DASHBOARD.append(`Ti sei ricordato tutti i numeri!
            ${ARRAY_NUMERI_TRUE}`)
    }

    else if (ARRAY_NUMERI_TRUE.length = 1){
        DASHBOARD.append(`Ti sei ricordato un solo numero!!
            ${ARRAY_NUMERI_TRUE}`)
    }

    else {
        DASHBOARD.append('Ti ricordi almeno come ti chiami ? ')
    }
}























function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }