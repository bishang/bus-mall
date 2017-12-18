'use strict';

var allProducts = [];
var productNames =
  [
    'bag',
    'banana',
    'bathroom',
    'boots',
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
    'wine-glass'
  ];

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function Product(name) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.timesDisplayed = 0;
  this.timesClicked = 0;
  this.prevDisplayed = false;
  allProducts.push(this);
  this.click = function(){
    this.timesClicked ++;
    this.prevDisplayed = true;
  }
};

function createProducts() {
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i]);
  };
};

function random() {
  return Math.floor(Math.random() * (allProducts.length - 0)) + 0; // via MDN docs
};

function renderImages() {
  image1.src = allProducts[random()].path;
  console.log('image1', image1.src);
  image2.src = allProducts[random()].path;
  console.log('image2', image2.src);
  image3.src = allProducts[random()].path;
  console.log('image3', image3.src);
};

createProducts();
console.log(allProducts);
renderImages();
image1.addEventListener('click', click);
image2.addEventListener('click', click);
image3.addEventListener('click', click);
