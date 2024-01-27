const screen = document.getElementById('screen');
const El1 = document.getElementById('el1');
const El2 = document.getElementById('el2');
const input = document.getElementById('input_number');
const score = document.getElementById('score');
const submit = document.getElementById('submit');

let firstElement = Math.floor((Math.random() * 10) + 1);
let secondElement = Math.floor((Math.random() * 10) + 1);

El1.innerHTML = firstElement;
El2.innerHTML = secondElement;

const sum = firstElement + secondElement;

let scores = JSON.parse(localStorage.getItem("scores"));
score.innerHTML = scores;

submit.addEventListener('click', () => {
    const input_number = +input.value;
    console.log(input_number);
    if (input_number === sum)  {
        scores++;
        updateLocalStorage();
    }else {
        scores--;
        updateLocalStorage();
    }
})

function updateLocalStorage() {
    localStorage.setItem("scores", JSON.
    stringify(scores))
}
