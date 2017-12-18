'use strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'sweepers', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function Product(name) {
  this.name = name;
  this.path = 'images/' + this.name + '.jpg';
  this.displayed = 0;
  this.clicked = 0;
  this.prevDisplayed = false;
  allProducts.push(this);
};

function createProducts() {
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i]);
  };
};

var random = function() {
  return Math.floor(Math.random() * (productNames.length - 0 + 1)) + 0; // via MDN docs
};

createProducts();
console.log(allProducts);
