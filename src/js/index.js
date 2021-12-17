import '../scss/main.scss';
import { registerSW } from './pwa.js';
registerSW();


const number = document.querySelector('.number--js');
const add = document.querySelector('.add--js');
const sub = document.querySelector('.sub--js');
const key = new Date().toISOString().slice(0,10)
let glass;
if (localStorage.getItem(key)) {
    glass = localStorage.getItem(key)
    number.innerHTML = glass
} else {
    glass = 0
    number.innerHTML = glass;
}

add.addEventListener('click', (e) => {
    e.preventDefault();
    glass++
    localStorage.setItem(key, glass)
    number.innerHTML = localStorage.getItem(key)
})

sub.addEventListener('click', (e) => {
    e.preventDefault();
    if (glass > 0) {
        glass--
        localStorage.setItem(key, glass)
        number.innerHTML = localStorage.getItem(key)
    }
})