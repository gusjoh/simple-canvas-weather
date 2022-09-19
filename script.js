"use strict";
let canvasElement = null;
let ctx = null;
let weather = null;
window.addEventListener("load", function(){ 
    canvasElement = document.querySelector("#canvasElement");
    ctx = canvasElement.getContext("2d", { alpha: false });
    window.requestAnimationFrame(renderCanvas);
    setCanvasSize();
});
window.addEventListener("resize", setCanvasSize);

function setCanvasSize(){
	canvasElement.width = window.innerWidth;
	canvasElement.height = window.innerHeight;
	instantiateObjects();
}

function instantiateObjects(){
    weather = new Array();
    weather.push(new Rain(canvasElement, ctx, 0, 0));
}

function renderCanvas(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    weather.forEach(element => {
        element.render();        
    });
    
    window.requestAnimationFrame(renderCanvas);
}