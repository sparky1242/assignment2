
var Vector2 = function() {
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function (x, y) {
	this.x = x;
	this.y = y;
};

Vector2.prototype.normalize = function () {
	var length = Math.sqrt(this.x*this.x) + (this.y*this.y);
	
	this.x = this.x / length;
	this.y = this.y / length;
};

Vector2.prototype.add = function (v) {
	this.x += v.x;
	this.y += v.y;
};

Vector2.prototype.subtract = function (v) {
	this.x -= v.x;
	this.y -= v.y;
};

Vector2.prototype.multiplyScalar = function (n) {
	this.x *= n;
	this.y *= n;
};

var a = new Vector2();
a.set(5, 6);

var b = new Vector2();
b.set(1, 2);

a.add(b);
//a.x == 6
//a.y == 8