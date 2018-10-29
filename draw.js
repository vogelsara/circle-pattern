

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    context.linewidth = 3;
    context.strokeStyle = "red";
    
    context.beginPath();
    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    context.stroke();
}

function drawHead(context) {
    context.arc(75, 75, 50, 0, 2*Math.PI);
}

function drawEyes(context) {
    context.moveTo(65, 65);
    context.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    context.moveTo(95, 65);
    context.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
}

function drawMouth(context) {
    context.moveTo(110, 75);
    context.arc(75, 75, 35, 0, Math.PI,); 
}

/*function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(310, 310, 300, 0, 2 * Math.PI);
    context.stroke();*/