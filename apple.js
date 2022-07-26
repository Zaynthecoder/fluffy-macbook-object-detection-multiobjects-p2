status = "";


function preload() {
    img = loadImage("apple.jpg");

}

function setup() {
    canvas = createCanvas(650,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - We are detecting the objects in the image"

}

function modelLoaded() {
    console.log("The model called cocossd has been initialized. This means my amazing website will be working now. :) ");
    status = true;
}

function gotResults(error, results) {
    if (error){
        console.error( "Hi. Unfortunately there has been an error. The error is - " + error);
    }

    if (results){
        console.log(results);
    }
}