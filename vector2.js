       
var Vector2 = function() {
	this.x = 0;
	this.y = 0;
}

Vector2.prototype.set = function (x, y) {
	this.x = x;
	this.y = y;
}

Vector2.prototype.normalize = function () {
	var length = Math.sqrt(this.x*this.x + this.y*this.y);
	
	this.x = this.x / length;
	this.y = this.y / length;
}

Vector2.prototype.add = function (v) {
	this.x += v.x;
	this.y += v.y;
}

Vector2.prototype.subtract = function (v) {
	this.x -= v.x;
	this.y -= v.y;
}

Vector2.prototype.multiplyScalar = function (n) {
	this.x *= n;
	this.y *= n;
}

Vector2.prototype.copy = function () {
	var temp = new Vector2();
	temp.x = this.x;
	temp.y = this.y;
	return temp;
}