
//Stampare i numeri da 1 a 100
//Per i numeri multipli di 3 stampare Fizz
//Per i numeri multipli di 5 stampare Buzz
//Per i numeri che sono sia multipli di 3 che di 5 stampare FizzBuzz.
//Stampare in console.

let fizzBuzzNumber;
const numbersContainer = document.querySelector('.number-list');

for(let i = 0; i <= 100; i++){


    if( i % 3 === 0 && i % 5 === 0) {
        fizzBuzzNumber = 'FizzBuzz';

    }else if( i % 3 === 0) {
        fizzBuzzNumber = 'Fizz';

    }else if( i % 5 === 0) {
        fizzBuzzNumber = 'Buzz';

    }else {
        fizzBuzzNumber = i;
    }

    const newList = `<li class="list">${fizzBuzzNumber}</li>`;
    numbersContainer.innerHTML += newList;

}

