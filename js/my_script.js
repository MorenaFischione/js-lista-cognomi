/*
 *	chiedi all’utente il cognome
 * 	inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 *	stampa la lista ordinata alfabeticamente
 *	scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 *
 */




//  Creo una array con alcuni cognomi

 let listaCognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];
 
 //creo un ciclo for per rendere tutti gli elementi maiuscoli 
 for (var i = 0; i < listaCognomi.length; i++){
    listaCognomi[i] = listaCognomi[i].toUpperCase();
}
 console.log (listaCognomi);
 
let cognomeIndicato = prompt("Quale è il tuo Cognome?"); //  Chiedo all'utente il suo Cognome
let cognomeMaiuscolo = cognomeIndicato.toUpperCase();    //  Trasformo il cognome in Maiuscolo
console.log (cognomeMaiuscolo);                         


listaCognomi.push(cognomeMaiuscolo);
let listaCognomiAggiornata = listaCognomi;  // Aggiungo il cognome Maiuscolo alla lista
console.log (listaCognomiAggiornata);

listaCognomiAggiornata.sort();   //  Ordino in maniera alfabetica la lista

// creo un ciclo for per stampare in console i nomi nell'ordine corretto
for (let x=0; x < listaCognomiAggiornata.length; x++) {  
    console.log (listaCognomiAggiornata[x]);
}

console.log (listaCognomiAggiornata.indexOf(cognomeMaiuscolo) + 1);






