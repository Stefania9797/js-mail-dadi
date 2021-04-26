// Esercizio Mail

//Chiedi all’utente la sua email, 
var userEmail = prompt("Qual è la tua e-mail?");
//lista di chi può accedere, 
var validEmail = ["stefania@email.it","mario@email.com","sara@email.it","monica@email.com","giulio@email.com"];
//variabile che controlla l'accesso
var accesso = false;
// verifica della email
for(var i = 0; i < validEmail.length; i++){
    if(validEmail[i]==userEmail){
        accesso=true;
    }
}
//stampa un messaggio appropriato sull’esito del controllo.
if(accesso==true){
    alert("Accesso autorizzato! Welcome to the party :D");
    }
    else{
        alert("Accesso negato! Non sei invitato :("); 
    }

//Gioco dei dadi

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var userNumber = Math.floor((Math.random() * 6) + 1);
alert("Il numero dell'utente è " + userNumber);

var pcNumber = Math.floor((Math.random() * 6) + 1);
alert("Il numero del computer è "+ pcNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(userNumber>pcNumber){
    alert("Vince l'utente!")
}
else if(userNumber<pcNumber){
    alert("Vince il computer!")
}
else if(userNumber==pcNumber){
    alert("Pareggio! Spartire il premio")
}
