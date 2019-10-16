/*let hetNummer = Math.floor(Math.random()*Math.floor(26));
let gok = 5;

// als gok hoger dan nummer is 'te hoog'
// als < te laag
// als gok is 5 ' ja je hebt het geraden'

if (gok > hetNummer ) {
    console.log ('Het nummer is te hoog!')
} else if ( gok < hetNummer) {
    console.log ('Het nummer is te laag!')
} else {
    console.log ('Ja je hebt het geraden!')
}
console.log(hetNummer);*/




let random = Math.floor(Math.random()*Math.floor(26));
console.log(random)
let name = prompt('Wat is your name?', '')
let guessUser = prompt('Hey ' + name + '!' + ' Voer een nummer in van 0 tot 25 om te beginnen met raden.','');
let aantalPogingen = 0;



function checkInput(guessUser) {
    for (let index = 0; index < 5; index++) {
        console.log(index)

        if (guessUser ===''){
            guessUser=prompt ('A number please');
        } else if(guessUser > random){
            guessUser=prompt('Sorry, je zit te hoog! Guess again!');
        } else if (guessUser < random) {
            guessUser=prompt('Sorry je zit te laag. You may guess again!');
        } else  {
            alert('Yes, that is the right number! The game is finished. Goodbye '+ name );
            index=5;
        }  
    }
}

checkInput(guessUser);


