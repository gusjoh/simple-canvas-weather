export class Rain{
    private cEl: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private severity: number;
    private wind: number;
    private raindrops: Array<Raindrop>;
        
    constructor(canvasElement: HTMLCanvasElement, context: CanvasRenderingContext2D, severity:number, wind:number = 0){
        this.cEl = canvasElement;
        this.ctx = context;
        this.severity = severity;
        this.wind = wind;
        this.raindrops = new Array();
        this.makeRaindrops();
    }
    makeRaindrops(){
        for (let index = 0; index < 5; index++) {
            this.raindrops.push(new Raindrop(this.cEl, this.ctx, this.severity, this.wind));            
        }        
    }
    render(){
        this.ctx.strokeStyle = "white";
        this.raindrops.forEach(raindrop => {
            raindrop.render();
        });
    }
}
class Raindrop {
    private cEl: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private severity: number;
    private wind: number;
    private x: number;
    private y: number;
    private length: number;
    private yOffset: number;
	constructor(canvasElement: HTMLCanvasElement, context: CanvasRenderingContext2D, severity = 0, wind = 0){
        this.cEl = canvasElement;
        this.ctx = context;
        var sizeAndOffsetCorrelation = Math.random();
		this.x = Math.random() * this.cEl.width;
		this.y = Math.random() * this.cEl.height;
        this.length = (sizeAndOffsetCorrelation * 2) + 10 + (severity * 50);
        this.yOffset = (sizeAndOffsetCorrelation * .5) + (wind * 100);
	}
	render(){
		this.ctx.beginPath();
        this.ctx.moveTo(this.x , this.y);
        this.updateXY();
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.resetIfOutOfBounds();
	}
	updateXY(){
		this.x += this.yOffset;
		this.y += this.length;
	}
    resetIfOutOfBounds(){
        if(this.y > this.cEl.height){
            this.y = 0 - this.length;
            this.x = Math.random() * this.cEl.width;
        }
        if(this.x > this.cEl.width){
            this.x = 0;
        }else if (this.x + this.yOffset < 0){
            this.x = this.cEl.width;
        }
    }
}