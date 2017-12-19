'use strict';

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast',  'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.allProducts = [];

var totalClicks = 0;

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var img1;
var img2;
var img3;

function Product(name) {
  this.name = name;
  this.path = 'img/' + this.name + '.jpg';
  this.timesDisplayed = 0;
  this.timesClicked = 0;
  this.prevDisplayed = false;
  Product.allProducts.push(this);
};

function createProducts() {
  for(var i = 0; i < productNames.length; i++){
    new Product(productNames[i]);
  };
};

function random() {
  return Math.floor(Math.random() * (Product.allProducts.length)); // via MDN docs
};

function renderImages() {
  img1 = random();
  console.log('img1', img1);
  image1.src = Product.allProducts[img1].path;
  console.log('image1', image1.src);
  img2 = random();
  while (img1 === img2) {
    img2 = random();
  };
  console.log('img2', img2);
  image2.src = Product.allProducts[img2].path;
  console.log('image2', image2.src);
  img3 = random();
  while (img3 === img1 || img3 === img2) {
    img3 = random();
  };
  console.log('img3', img3);
  image3.src = Product.allProducts[img3].path;
  console.log('image3', image3.src);
};

createProducts();
console.log(Product.allProducts);
renderImages();

// image1.addEventListener('click', click);
// image2.addEventListener('click', click);
// image3.addEventListener('click', click);
