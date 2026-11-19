let smartphone = {
    'marca' : 'Iphone',
    'modello' : 12,
    'prezzo' : 230,
    'rubrica' : [
        {'nome' : 'Valerio', 'numero' : 333222111},
        {'nome' : 'Lorenzo', 'numero' : 333333333},
        {'nome' : 'Elisa', 'numero' : 333444444},
    ],
    'chiama' : function(name){
        // parto da smartphone (oggetto) - raggiungo rubrica che è il mio array e filtro. Il filtro fa un ciclo su ogni contatto. Essendo contatto un oggetto, accedo al suo nome, con la dot syntax e dico che contatto.nome deve essere identico al name (parametro della funzione) che passerò io dall'esterno in fase di invocazione
        let filtered = this.rubrica.filter((contatto)=> contatto.nome == name);
        console.log(filtered);

        // dato che filtered è un array che contiene l'oggetto lorenzo, prima di arrivare alla chiave nome, devo specificare in che indice dell'array filtered, si trova l'oggetto lorenzo. Dato che è un solo elemento, si trova in indice 0
        console.log(`Sto chimando ${filtered[0].nome} al numero ${filtered[0].numero}`);
    },

    'aggiungiContatto' : function(nuovoNome, nuovoNumero){
        this.rubrica.push({'nome' : nuovoNome, 'numero' : nuovoNumero});
    },

    'rimuoviContatto' : function(name){
        // parti da smartphone, vai a rubrica e filtra. per ogni contatto estrai dentro filtered tutti i contatti che non hanno il nome uguale a quello che ti passo io in fase di invocazione
        let filtered = this.rubrica.filter((contatto)=> contatto.nome != name);
        // ora che abbiamo nel filtro tutti i contatti diversi da quello da eliminare
        // dobbiamo dire che rubrica deve essere esattamente questa nuova rubrica senza il nome eliminato. Dato che filtered è un clone dell'array di partenza, dobbiamo dire che rubrica deve diventare esattamente filtered.
        this.rubrica = filtered;
    }
}

smartphone.chiama('Lorenzo');
smartphone.aggiungiContatto('Diana', 11111111);
smartphone.aggiungiContatto('Erica', 22222222);


smartphone.rimuoviContatto('Valerio');
console.log(smartphone);