p5.disableFriendlyErrors = true;

var video;
var pScale = 10;
var symbols = [];
var r;
var g;
var b;
var bright;
var gBright;

function setup() {
  createCanvas(870, 580);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/pScale, height/pScale);
  video.hide();

  var x = 0;
  for (var i = 0; i <= width / pScale; i++) {
   var streamSize = random(40, 90);
   var y = random(0, -100);
   var speed = random(0.1, 1);
   for (var j = 0; j <= streamSize; j++) {
     var symbol = new Symbol(x, y, speed);
     symbol.setToRandomSymbol();
     symbols.push(symbol);
     y--;
   }
   x++;
 }
 textSize(pScale);
}

function draw() {
  background(0, 230);
  video.loadPixels();
  symbols.forEach(function(symbol) {
    if (symbol.x * pScale > width || symbol.x * pScale < 0 || symbol.y * pScale > height || symbol.y * pScale < 0) {
    } else {
      var index = (symbol.x + 1 + (symbol.y * video.width)  * 4);
      var index = (video.width - Math.ceil(symbol.x) + 1 + (Math.ceil(symbol.y) * video.width))*4;
      r = video.pixels[index + 0];
      g = video.pixels[index + 1];
      b = video.pixels[index + 2];
      bright = (r + g + b) / 3;
      gBright = map(g, 0, 255, 20, 260);

      var w = map(bright, 0, 255, 5, 10);
      if (!r || ! g || ! b) {
        fill(0, 0, 0);
      } else {
        fill(30, g, 30, gBright);
      }
      text(symbol.value, symbol.x * pScale, symbol.y * pScale);
    }
    symbol.rain();
    symbol.setToRandomSymbol();
  });

}

function Symbol(x, y, speed) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
        this.value = String.fromCharCode(
          0x30A0 + round(random(0, 96))
      );
    }
  }

  this.rain = function() {
    this.y = (this.y * pScale >= height) ? 0 : this.y += this.speed;
  }

}
