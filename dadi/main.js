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