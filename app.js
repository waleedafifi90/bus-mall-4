'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById('leftImage');
const centertImage = document.getElementById('centertImage');
const rightImage = document.getElementById('rightImage');
let list = document.getElementById('list');
let button = document.getElementById('button');


let leftimgIndex = 0;
let rightimgIndex = 0;
let centerimgIndex = 0;
const clickCounter = 8;

let imgArray = [
    'bag',
    'banana',
    'boots',
    'bathroom',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'];

function busMall(name) {
    this.name = name;
    this.path = `img/${name}.jpg`;
    this.shown = 0;
    this.click = 0;
    busMall.all.push(this);
}

busMall.all = [];
busMall.counter = 0;
for (let i = 0; i < imgArray.length; i++) {
    new busMall(imgArray[i]);
}

function render() {
    leftimgIndex = randomNumber(0, busMall.all.length - 1);
    leftImage.src = busMall.all[leftimgIndex].path;

    do {
        centerimgIndex = randomNumber(0, busMall.all.length - 1);
    } while (centerimgIndex === leftimgIndex);

    centertImage.src = busMall.all[centerimgIndex].path;

    do {
        rightimgIndex = randomNumber(0, busMall.all.length - 1);
    } while (leftimgIndex === rightimgIndex || centerimgIndex === rightimgIndex);

    rightImage.src = busMall.all[rightimgIndex].path;



    busMall.all[leftimgIndex].shown++;
    busMall.all[centerimgIndex].shown++;
    busMall.all[rightimgIndex].shown++;

}


function handelClick(event) {

    if (busMall.counter <= clickCounter) {
        const clickedElement = event.target;
        if (clickedElement.id == 'leftImage' || clickedElement.id == 'rightImage' || clickedElement.id == 'centertImage') {
            if (clickedElement.id == 'leftImage') {
                busMall.all[leftimgIndex].click++;
            }

            if (clickedElement.id == 'centerImage') {
                busMall.all[centerimgIndex].click++;
            }

            if (clickedElement.id == 'rightImage') {
                busMall.all[rightimgIndex].click++;
            }
            busMall.counter++;
            render();
        }
    }
}

imageSection.addEventListener('click', handelClick);
button.addEventListener('click', viewResults);
render();

function viewResults(event) {
    let ulElement = document.createElement('ul');
    list.appendChild(ulElement);
    let liElement;
    for (let i = 0; i < busMall.all.length; i++) {
        liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${busMall.all[i].name} had ${busMall.all[i].click} votes, and was seen ${busMall.all[i].shown} times.`;
    }
}