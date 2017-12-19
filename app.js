'use strict';

var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast',  'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.allProducts = [];
var productClicks = [];

var allowedClicks = 25;

var imageContainer = document.getElementById('random-images');
var resultsContainer = document.getElementById('results');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var img1;
var img2;
var img3;
var results = document.getElementById('results');

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

function createProductClicksArr() {
  for(var i = 0; i < productNames.length; i++) {
    productClicks.push(Product.allProducts[i].timesClicked);
  };
};

function random() {
  return Math.floor(Math.random() * (Product.allProducts.length)); // via MDN docs
};

// Displays 3 Different Random Images
function renderImages() {
  if(allowedClicks > 0) {
    img1 = random();
    while(Product.allProducts[img1].prevDisplayed === true) {
      img1 = random();
    };
    console.log('img1', img1);
    image1.src = Product.allProducts[img1].path;
    console.log('image1', image1.src);
    Product.allProducts[img1].prevDisplayed = true;
    Product.allProducts[img1].timesDisplayed ++;

    img2 = random();
    while (img1 === img2 || Product.allProducts[img2].prevDisplayed === true) {
      img2 = random();
    };
    console.log('img2', img2);
    image2.src = Product.allProducts[img2].path;
    console.log('image2', image2.src);
    Product.allProducts[img2].prevDisplayed = true;
    Product.allProducts[img2].timesDisplayed ++;

    img3 = random();
    while (img3 === img1 || img3 === img2 || Product.allProducts[img3].prevDisplayed === true) {
      img3 = random();
    };
    console.log('img3', img3);
    image3.src = Product.allProducts[img3].path;
    console.log('image3', image3.src);
    Product.allProducts[img3].prevDisplayed = true;
    Product.allProducts[img3].timesDisplayed ++;
  } else if(allowedClicks === 0) {
    displayResults();
  };
};

function imageClick(event) {
  if(event.target.id === 'image1') {
    Product.allProducts[img1].timesClicked ++;
  };
  if(event.target.id === 'image2') {
    Product.allProducts[img2].timesClicked ++;
  };
  if(event.target.id === 'image3') {
    Product.allProducts[img3].timesClicked ++;
  };
  Product.allProducts[img1].prevDisplayed = false;
  Product.allProducts[img2].prevDisplayed = false;
  Product.allProducts[img3].prevDisplayed = false;
  renderImages();
  allowedClicks --;
};

function displayResults() {
  createProductClicksArr();
  resultsContainer.style.display = 'block';
};

createProducts();
renderImages();

imageContainer.addEventListener('click', imageClick);
