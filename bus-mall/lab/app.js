'use strict';

//array that stores images
var imagePaths = ['bag.jpg','breakfast.jpg','dog-duck.jpg','scissors.jpg','unicorn.jpg','banana.jpg','bubblegum.jpg','dragon.jpg','shark.jpg','usb.gif','bathroom.jpg','chair.jpg','pen.jpg','sweep.png','water-can.jpg','boots.jpg','cthulhu.jpg','pet-sweep.jpg','tauntaun.jpg','wine-glass.jpg'];

//array that stores image obects that will keep track of clicks, views, etc.
var images = [];

//for-loop to create array of image objects
for (var i = 0; i < imagePaths.length; i++) {
  //take imagePaths strings and get name out of it
  //not sure if before or after this
  var path = 'img/' + imagePaths[i];
  var name = imagePaths[i].substring(0, imagePaths[i].indexOf("."));
  //pushing null because will push something else into it later
  new Image(name, path, null);
}
//display first 3 images
for (var j = 0; j < 3; j++) {
  drawImage();
}

//get element from html to append images
var imageList = document.getElementById('images');
//event listener to listen for image clicks
imageList.addEventListener('click', clickHandler);

function clickHandler(e) {
  //use event target to determine which image was clicked
  //add to views of all images displayed
  //add to the clicks of just the clicked image

  //clear images before displaying new images
  imageList.textContent = '';
  for (var k = 0; k < 3; k++) {
    drawImage();
  }  
  console.log('click', e.target);
}

//make this draw out all 3 images - loops
//make this check index of images for no repeats - loops
//use the image path for the source
function drawImage() {
  //create elements to attach to DOM
  var img = document.createElement('img');
  var li = document.createElement('li');

  //get element to attach images to
  var imageList = document.getElementById('images');

  //get random number between 0 & length of imagePaths array to use as index
  var randomIndex = Math.floor(Math.random() * imagePaths.length);

  //set src
  img.setAttribute('src', 'img/' + imagePaths[randomIndex]);

  //add to DOM
  li.appendChild(img);
  imageList.appendChild(li);
  //console.log(img.src);
}

//image object constructor
function Image(name, path) {
  this.view = 0;
  this.clicks = 0;
  this.name = name;
  this.path = path;

  images.push(this);
}
