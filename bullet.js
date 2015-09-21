var Bullet = function() {
	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.width = 20;
	this.height = 20;
	this.image.src = "bullet.png";
	this.velocityX = -30;
	this.velocityY = -30;
};

Bullet.prototype.update = function(deltaTime)
{
	if( typeof(this.rotation) == "undefined" )
		this.rotation = 0; // hang on, where did this variable come from!
	
	this.x += this.velocityX * deltaTime;
	this.y += this.velocityY * deltaTime;
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		this.rotation = player.rotation;
		this.velocityX = Math.cos(this.rotation) * -30;
		this.velocityY = Math.sin(this.rotation) * -30;
	}
}

Bullet.prototype.draw = function()
{
	context.save();
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}

