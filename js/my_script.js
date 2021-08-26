/*
 *	chiedi all’utente il cognome
 * 	inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 *	stampa la lista ordinata alfabeticamente
 *	scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 *
 */




//  Creo una array con alcuni cognomi

 let listaCognomi = ["bianchi", "neri", "rossi", "verdi", "gialli"];
 
 for (var i = 0; i < listaCognomi.length; i++){
    listaCognomi[i] = listaCognomi[i].toUpperCase();
}
 console.log (listaCognomi);

 
let cognomeIndicato = prompt("Quale è il tuo Cognome?"); //  Chiedo all'utente il suo Cognome
let cognomeMaiuscolo = cognomeIndicato.toUpperCase();    //  Trasformo il cognome in Maiuscolo
listaCognomi.push(cognomeMaiuscolo); 
console.log(listaCognomi);

for (let x=0; x<listaCognomi.length; x++) { 
    listaCognomi.sort (); 
    console.log (listaCognomi[x]);
    // listaCognomi.indexOf(x+1);
    // console.log (listaCognomi);
}




