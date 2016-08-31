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

//add prototypes to Image constructor
Image.prototype.addClick = function() {
  this.clicks += 1;
};
Image.prototype.addView = function() {
  this.views += 1;
};

//generate indices for 1st 3 images & display images
var arrayOfRandomIndices = randomIndices();
drawImage(arrayOfRandomIndices);

//get element from html to append images
var imageList = document.getElementById('images');
//event listener to listen for image clicks
imageList.addEventListener('click', clickHandler);

function clickHandler(e) {
  //get name of clicked image using event target
  var target = e.target.src;

  if (target) {
    //clear images before displaying new images
    imageList.textContent = '';

    target = target.slice(61, e.target.length);
    var targetName = target.substring(0, target.indexOf("."));

    //increment click property on image object
    for (var m = 0; m < images.length; m++) {
      if (images[m].name === targetName) {
        images[m].addClick();
      }
    }

    //display 3 separate images
    var arrayOfRandomIndices = randomIndices();
    drawImage(arrayOfRandomIndices);
  }
}

//make this draw out all 3 images - loops
function drawImage(array) {
  for (var q = 0; q < array.length; q++) {
    //create elements to attach to DOM
    var img = document.createElement('img');
    var li = document.createElement('li');

    //get element to attach images to
    var imageList = document.getElementById('images');

    //set src using each index from array
    img.setAttribute('src', 'img/' + imagePaths[array[q]]);

    //add to DOM
    li.appendChild(img);
    imageList.appendChild(li);

    //increment view property on image object
    //object in the image array at the index at index p of the passed in array
    var theObjectIndex = array[q];
    images[theObjectIndex].addView();
  }
}

function randomIndices() {
  var firstRandomIndex = Math.floor(Math.random() * imagePaths.length);
  var secondRandomIndex = Math.floor(Math.random() * imagePaths.length);
  while (firstRandomIndex === secondRandomIndex) {
    var secondRandomIndex = Math.floor(Math.random() * imagePaths.length);
  }
  var thirdRandomIndex = Math.floor(Math.random() * imagePaths.length);
  while (firstRandomIndex === thirdRandomIndex || secondRandomIndex === thirdRandomIndex) {
    var thirdRandomIndex = Math.floor(Math.random() * imagePaths.length);
  }
  return [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
}

//image object constructor
function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = path;

  images.push(this);
}
