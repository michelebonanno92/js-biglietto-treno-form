
// 1 chiedo il numero di kilometri all'utente e lo salvo
const percorso = prompt('Quanti Kilometri vuoi percorrere?', "100");
console.log('i kilometri che vuole percorrere il passegero sono' , percorso);

// 2 chiedo l'età all'utente e lo salvo
const eta = prompt('Quanti anni hai?' , 17) ;
console.log("Gli anni del passeggero sono" , eta ) ;

// 3 salvo prezzo base al km
const prezzoBase =  0.21 ;
console.log("Il prezzo minimo al km è" , prezzoBase ) ;


// 4 calcolo prezzo base percorso
const prezzoBiglietto = ( percorso * prezzoBase ) ;
console.log("Il costo totale al km è" , prezzoBiglietto ) ;



// se minorenne applico sconto del 20% 
if ( eta <= 17 ) {
    const prezzoBigliettoSconto = (  prezzoBiglietto * 0.8 ) ;
    // (  prezzoBiglietto - ( prezzoBiglietto * 20 / 100 ) ) 
    console.log("Il costo totale al km con lo sconto del 20% è " , prezzoBigliettoSconto ) ;
    alert('[PREZZO MINORENNE] Il prezzo del biglietto è €' + prezzoBigliettoSconto.toFixed(2)) ;
}
// altrimenti se over 65 applico sconto del 40%
else if ( eta >= 66 ) {
    const prezzoBigliettoSconto = (  prezzoBiglietto * 0.6 ) ;
    // (  prezzoBiglietto - ( prezzoBiglietto * 40 / 100 ) )
    console.log("Il costo totale al km con lo sconto del 40% è " , prezzoBigliettoSconto ) ;
    alert('[PREZZO OVER 65] Il prezzo del biglietto è €' + prezzoBigliettoSconto.toFixed(2)) ;

// in tutti gli altri casi tra i 18  e i 65 anni non applico sconti 
}else{
    alert('[PREZZO SENZA SCONTO] Il prezzo del biglietto è €' + prezzoBiglietto.toFixed(2)) ;

} 











 


