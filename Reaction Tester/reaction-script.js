var start = new Date().getTime(); //measure time when page loads
//return random colours
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var top = Math.random() * (h - 350);
    var left = Math.random() * (w - 350);
    var width = Math.random() * 200 + 100; //+ 100 ensures value can't be zero
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000); //times function to run randomly up to 2 seconds
}

appearAfterDelay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime(); //measure time when clicking
    var timeTaken = (end - start) / 1000; // calculate time take in seconds
    //in milliseconds so divide by 1000
    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
    appearAfterDelay(); //makes the shape appear again
};