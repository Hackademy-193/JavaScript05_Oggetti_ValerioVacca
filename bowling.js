let bowling = {

    'players' : [
        {'name' : 'Valerio', 'scores': []},
        {'name' : 'Francesco', 'scores' : []},
        {'name' : 'Aurora', 'scores' : []},
    ],

    // per settare i punteggi, dobbiamo dire che per 10 volte, deve andare dentro players, ciclare sul singolo giocatore, addentrarsi alla chiave scores e pushare per 10 volte, un numero randomico da 0 a 10;
    'setScores' : function(){
       for(let i = 1; i <= 10; i++){
         this.players.forEach((player)=> player.scores.push(Math.floor(Math.random() * 11)));
       }
    },

    // creiamo una funzione per calcolare il punteggio finale di ciascun giocatore e che vada ad aggiungere questo punteggio finale all'oggetto giocatore, dentro una nuova chiave, chiamata finalScore
    'setFinalScore' : function(){
        this.players.forEach((player)=> player.finalScore = player.scores.reduce((acc, number)=> acc + number));
    },

    // per decretare il vincitore, vado a sortare su players in ordine decrescente. 
    // essendo che players contiene oggetti, a e b sono esattamente l'intero oggetto player al singolare. 
    // Ma, dato che per sortare ho necessità del valore numerico che si trova dentro la chiave finalScore e a e b sono oggetti, nonché il singolo player, allora posso dire parti dall'oggetto e vai a prendermi il valore nella chiave finalScore. Quindi b.finalScore - a.finalScore che è come dire player.finalScore - player.finalScore
    'setWinner' : function(){
        this.players.sort((a , b)=> b.finalScore -  a.finalScore);

        // verifichiamo la parità

        if(this.players[0].finalScore > this.players[1].finalScore){
            let winner = this.players[0];
            console.log(`Il vincitore della partita a bowling è ${winner.name} con un punteggio di ${winner.finalScore} punti.`);
        } else {
            console.log(`${this.players[0].name} e ${this.players[1].name} hanno pareggiato, totalizzando entrambi ${this.players[0].finalScore} punti`);
        }


    },

    'addPlayer' : function(newName){
        this.players.push({'name' : newName, 'scores' : []});
    }


}

// aggiungiamo i nuovi players
// bowling.addPlayer('Lorenzo');
// bowling.addPlayer('Emanuele');
// bowling.addPlayer('Elisa');
// bowling.addPlayer('Diana');
// bowling.addPlayer('Erica');
// bowling.addPlayer('Fra2');

// setto i punteggi
// bowling.setScores();
// setto il punteggio finale
// bowling.setFinalScore();
// setto il vincitore
// bowling.setWinner();
// console.log(bowling);


// console.log(Object.entries(bowling)); -> mi permette di stampare a schermo tutte le coppie chiave-valore del mio oggetto

// console.log(Object.values(bowling)); -> mi permette di stampare a schermo tutti i valori, associati alle chiavi del mio oggetto bowling

// console.log(Object.keys(bowling)); -> mi permette di stampare a schermo tutte le chiavi del mio oggetto bowling

