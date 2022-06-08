
//Dichiarazione variabili

let fizzBuzzNumber;
const numbersContainer = document.querySelector('.numbers-container');
let fizzBuzzClassName;

//Stampare i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    //Per i numeri che sono sia multipli di 3 che di 5 stampare FizzBuzz.
    //Per i numeri multipli di 3 stampare Fizz
    //Per i numeri multipli di 5 stampare Buzz
    //assegnamo un colore diverso a seconda della classe : Fizz .green, Buzz .yellow e FizzBuzz .pink
    
    if( i % 3 === 0 && i % 5 === 0) {
        fizzBuzzNumber = 'FizzBuzz';
        fizzBuzzClassName = 'pink';

    }else if( i % 3 === 0) {
        fizzBuzzNumber = 'Fizz';
        fizzBuzzClassName = 'green';

    }else if( i % 5 === 0) {
        fizzBuzzNumber = 'Buzz';
        fizzBuzzClassName = 'yellow';

    }else {
        fizzBuzzNumber = i;
        fizzBuzzClassName = '' ;
    }

    //aggiungere un elemento html con il numero o la stringa corretta 
    const newList = `<div class="box ${fizzBuzzClassName}">${fizzBuzzNumber}</div>`;
    numbersContainer.innerHTML += newList;
    
}

