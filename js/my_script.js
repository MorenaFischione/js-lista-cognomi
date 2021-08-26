/*
 *	chiedi all’utente il cognome
 * 	inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
 *	stampa la lista ordinata alfabeticamente
 *	scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 *
 */

 let cognomeIndicato = prompt("Quale è il tuo Cognome?");

 let listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
 
 listaCognomi.push(cognomeIndicato);
 
 listaCognomi.sort () 
 console.log (listaCognomi);