var Rain = /** @class */ (function () {
    function Rain(canvasElement, context, severity, wind) {
        if (wind === void 0) { wind = 0; }
        this.cEl = canvasElement;
        this.ctx = context;
        this.severity = severity;
        this.wind = wind;
        this.raindrops = new Array();
        this.makeRaindrops();
    }
    Rain.prototype.makeRaindrops = function () {
        for (var index = 0; index < 5; index++) {
            this.raindrops.push(new Raindrop(this.cEl, this.ctx, this.severity, this.wind));
        }
    };
    Rain.prototype.render = function () {
        this.ctx.strokeStyle = "white";
        this.raindrops.forEach(function (raindrop) {
            raindrop.render();
        });
    };
    return Rain;
}());
export { Rain };
var Raindrop = /** @class */ (function () {
    function Raindrop(canvasElement, context, severity, wind) {
        if (severity === void 0) { severity = 0; }
        if (wind === void 0) { wind = 0; }
        this.severity = severity;
        this.wind = wind;
        this.cEl = canvasElement;
        this.ctx = context;
        this.sizeAndOffsetCorrelation = Math.random();
        this.x = Math.random() * this.cEl.width;
        this.y = Math.random() * this.cEl.height;
        this.length = (this.sizeAndOffsetCorrelation * 2) + 10 + (this.severity * 50);
        this.yOffset = (this.sizeAndOffsetCorrelation * .5) + (this.wind * 100);
    }
    Raindrop.prototype.render = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.updateXY();
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        this.resetIfOutOfBounds();
    };
    Raindrop.prototype.updateXY = function () {
        this.x += this.yOffset;
        this.y += this.length;
    };
    Raindrop.prototype.resetIfOutOfBounds = function () {
        if (this.y > this.cEl.height) {
            this.y = 0 - this.length;
            this.x = Math.random() * this.cEl.width;
        }
        if (this.x > this.cEl.width) {
            this.x = 0;
        }
        else if (this.x + this.yOffset < 0) {
            this.x = this.cEl.width;
        }
    };
    return Raindrop;
}());
