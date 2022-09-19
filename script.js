"use strict";
let canvasElement = null;
let ctx = null;
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

}

function renderCanvas(){
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    window.requestAnimationFrame(renderCanvas);
}