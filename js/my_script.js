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
console.log (cognomeMaiuscolo);                          //  Ordino in maniera alfabetica la lista



let listaCognomiAggiornata = listaCognomi.concat(cognomeMaiuscolo);
console.log (listaCognomiAggiornata);

// creo un ciclo for per stampare in console i nomi nell'ordine corretto
for (let x=0; x<listaCognomiAggiornata.length; x++) { 
    listaCognomiAggiornata.sort (); 
    console.log (listaCognomiAggiornata[x]);
}

console.log (listaCognomiAggiornata.indexOf(listaCognomi));








