function positionRandom() {
	return Math.random() * (areaJuego - (-areaJuego)) + -areaJuego;
}

function numRandom(){
	return Math.floor(Math.random() * 15) + 1;
}

function estanCerca(a, b, d) {
	let c = false;

	r0 = a[0] - b[0];
	r1 = a[1] - b[1];
	if (Math.abs(r0) < d && Math.abs(r1) < d) {
		c = true;
	}
	//console.log("R0: " + r0 + " // R1: " + r1);
	return c;
}

function borrarArrayScena(arr) {
	arr.forEach(element => {
		scene.remove(element);
	});
}

function elegirMensaje(o) {
	let mensajes = [
		"La bomba no ha tocado a nadie.",
		"Has muerto, recuerda alejarte al soltar la bomba.",
		"Has eliminado a un objetivo, restantes: " + cntAndroides,
		"Has eliminado todos los objetivos, pasas al nivel " + userLevel,
		"Has matado a Batman, esperamos que te hayas quedado a gusto.",
		"Has golpeado a Batman, ganas 500 puntos."
	];
	mostrarMensaje(mensajes[o]);
}

function mostrarMensaje(m) {
	var element = document.querySelector('#textDiv');
	element.textContent = "Información: " + m;
	element.style.display = 'block';

	setTimeout(function () {
		element.style.display = 'none';
	}, 5000);
}

/*
function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) 
{	
	// note: texture passed by reference, will be updated by the update function.
		
	this.tilesHorizontal = tilesHoriz;
	this.tilesVertical = tilesVert;
	// how many images does this spritesheet contain?
	//  usually equals tilesHoriz * tilesVert, but not necessarily,
	//  if there at blank tiles at the bottom of the spritesheet. 
	this.numberOfTiles = numTiles;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
	texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

	// how long should each image be displayed?
	this.tileDisplayDuration = tileDispDuration;

	// how long has the current image been displayed?
	this.currentDisplayTime = 0;

	// which image is currently being displayed?
	this.currentTile = 0;
		
	this.update = function( milliSec )
	{
		this.currentDisplayTime += milliSec;
		while (this.currentDisplayTime > this.tileDisplayDuration)
		{
			this.currentDisplayTime -= this.tileDisplayDuration;
			this.currentTile++;
			if (this.currentTile == this.numberOfTiles)
				this.currentTile = 0;
			var currentColumn = this.currentTile % this.tilesHorizontal;
			texture.offset.x = currentColumn / this.tilesHorizontal;
			var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
			texture.offset.y = currentRow / this.tilesVertical;
		}
	};
}
*/