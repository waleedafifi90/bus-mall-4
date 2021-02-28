'use strict';
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const rightImage = document.getElementById('centertImage');

let imgArray = [
    'bag.jpg',
    'banana',
    'boots',
    'bathroom',
    'breakfast',
    'bubblegum',
    'chair',
    'dog duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'toy',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'
];

function busMall(name) {
    this name = name;
    this path = `img/${name}.jpg`;
    this shown = 0;
    this click = 0;
    busMall.all.push(this);
}
busMall.all = [];
let leftimgIndex = 0;
let rightimgIndex = 0;
let centerimgIndex = 0;

for (let i = 0; i < imgArray.length; i++) {
    new busMall(imgArray[i]);
}

function render() {
    leftimgIndex = randomNumber(0, busMall.all.length - 1);
    leftImage.src = busMall.all[leftimgIndex].path;

    do {
        rightimgIndex = randomNumber(0, busMall.all.length - 1);
    } while (leftimgIndex === rightimgIndex);

    do {
        centerimgIndex = randomNumber(0, busMall.all.length - 1);
    } while (centerimgIndex === rightimgIndex || centerimgIndex === leftimgIndex);

    centerimgIndex.src = busMall.all[centerimgIndex].path;

    busMall.all[leftimgIndex].shown++;
    busMall.all[centerimgIndex].shown++;
    busMall.all[rightimgIndex].shown++;

}

const clickCounter = 8;

function handelClick(event) {

    if (busMall.click <= clickCounter) {
        const clickedElement = event.target;
        if (clickedElement.id == 'leftImage' || clickedElement.id == 'rightImage' || clickedElement.id == 'centertImage') {
            if (clickedElement.id == 'leftImage') {
                Goat.all[leftimgIndex].clicks++;
            }

            if (clickedElement.id == 'centerImage') {
                Goat.all[centerimgIndex].clicks++;
            }

            if (clickedElement.id == 'rightImage') {
                Goat.all[rightimgIndex].clicks++;
            }

            render();
        }
    }
}

imageSection.addEventListener('click', handelClick);
