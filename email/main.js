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
