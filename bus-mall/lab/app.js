'use strict';

//array that stores images
var imagePaths = ['bag.jpg','breakfast.jpg','dog-duck.jpg','scissors.jpg','unicorn.jpg','banana.jpg','bubblegum.jpg','dragon.jpg','shark.jpg','usb.gif','bathroom.jpg','chair.jpg','pen.jpg','sweep.png','water-can.jpg','boots.jpg','cthulhu.jpg','pet-sweep.jpg','tauntaun.jpg','wine-glass.jpg'];

//array that stores image obects that will keep track of clicks, views, etc.
var images = [];

//arrays that store generated random indices to display proper images
var arrayOfRandomIndices = [];
var oldIndexArray = [];

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
arrayOfRandomIndices = randomIndices(oldIndexArray);
console.log('before 1st draw', arrayOfRandomIndices);
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
        var theClickIndex = m;
      }
    }
//the click is for tracking the number clicked and percentage of those viewed
//need array for the old displayed to be compared to the new
//need variable for those viewed and
    //display 3 separate images
    var oldIndexArray = arrayOfRandomIndices;
    arrayOfRandomIndices = randomIndices(oldIndexArray);
    console.log('in clickHandler', arrayOfRandomIndices)
    drawImage(arrayOfRandomIndices);
  }
}

//make this draw out all 3 images - loops
function drawImage(array) {
  for (var q = 0; q < array.length; q++) {
    var theObjectIndex = array[q];
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
    images[theObjectIndex].addView();
  }
}

function randomIndices(array) {
  //get 1st index
  var firstRandomIndex = Math.floor(Math.random() * imagePaths.length);
  //make sure 1st index isn't in last group
  while (array.indexOf(firstRandomIndex) !== -1){
    firstRandomIndex = Math.floor(Math.random() * imagePaths.length);
  }
  //get 2nd index
  var secondRandomIndex = Math.floor(Math.random() * imagePaths.length);
  //make sure 2nd index is not 1st index & not in last group
  while (secondRandomIndex === firstRandomIndex
    || array.indexOf(secondRandomIndex) !== -1) {
    secondRandomIndex = Math.floor(Math.random() * imagePaths.length);
  }
  //get the 3rd index
  var thirdRandomIndex = Math.floor(Math.random() * imagePaths.length);
  //make sure 3rd index is not 1st index or 2nd index & not in last group
  while ((thirdRandomIndex === firstRandomIndex
    || thirdRandomIndex ===  secondRandomIndex)
    || array.indexOf(thirdRandomIndex) !== -1) {
    thirdRandomIndex = Math.floor(Math.random() * imagePaths.length);
  }
  arrayOfRandomIndices = [firstRandomIndex, secondRandomIndex, thirdRandomIndex];
  return arrayOfRandomIndices;
}

//image object constructor
function Image(name, path) {
  this.views = 0;
  this.clicks = 0;
  this.name = name;
  this.path = path;

  images.push(this);
}


//things still to do:
  //calculate number of views and percentage clicked AFTER 25 clicks
  //display this in the DOM
  //update with each click after 25

  //make sure that 3 different images are displayed each time
