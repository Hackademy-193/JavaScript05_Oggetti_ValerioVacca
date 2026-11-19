let smartphone = {
    'marca' : 'Iphone',
    'modello' : 12,
    'prezzo' : 230,
    'rubrica' : [
        {'nome' : 'Valerio', 'numero' : 333222111},
        {'nome' : 'Lorenzo', 'numero' : 333333333},
        {'nome' : 'Elisa', 'numero' : 333444444},
    ],
    'chiama' : function(){
        console.log('Sto chiamando...');
    }
}

// console.log(smartphone);
// voglio avviare la funzione chiama che si trova dentro smartphone (oggetto)
// smartphone.chiama();
// vado a beccare il valore di marca, partendo sempre dal mio oggetto smartphone
// console.log(smartphone.marca);
// se nella chiave lascio spazi, userò questa sintassi per richiamare la proprietà
// console.log(smartphone['marca cellulare']); -> don't try this at home

// posso inserire una proprietà nuova da fuori l'oggetto? YES!
smartphone.colore = 'Bianco';

// console.log(smartphone);

// posso inserire un nuovo metodo da fuori l'oggetto? YES!
// quando ci troviamo fuori dalla funzione e voglio aggiungere un metodo, posso sfruttare la sintassi di arrow function
// smartphone.ai = ()=>{
//     console.log("Ciao sono l'AI del tuo smartphone");   
// }

// smartphone.ai();
// voglio sovrascrivere una proprietà
smartphone.colore = 'Rosso';

// console.log(smartphone);

// voglio aggiungere un nuovo contatto alla mia rubrica
smartphone.rubrica.push({'nome' : 'Diana', 'numero' : 11111111111});

console.log(smartphone);