var THREEx = THREEx || {};

THREEx.MinecraftControls = function (object3d, input) {
	// arguments default values
	input = input || {}

	// handle arguments default values
	// Velocidad del personaje
	this.speed = 4;
	this.input = input;
	this.object3d = object3d;

	// user control
	this.update = function (delta, now) {
		var prevPosition = object3d.position.clone();
		// rotation
		if (input.left) object3d.rotation.y += 0.2 * delta * Math.PI * 2;
		if (input.right) object3d.rotation.y -= 0.2 * delta * Math.PI * 2;

		// strafe
		var distance = 0;
		if (input.strafeLeft) distance = +this.speed * delta;
		if (input.strafeRight) distance = -this.speed * delta;
		if (distance) {
			var velocity = new THREE.Vector3(distance, 0, 0);
			var matrix = new THREE.Matrix4().makeRotationY(object3d.rotation.y);
			velocity.applyMatrix4(matrix);
			object3d.position.add(velocity);
		}

		// up/down
		var distance = 0;
		if (input.up) distance = +this.speed * delta;
		if (input.down) distance = -this.speed * delta;
		if (distance) {
			var velocity = new THREE.Vector3(0, 0, distance);
			var matrix = new THREE.Matrix4().makeRotationY(object3d.rotation.y);
			velocity.applyMatrix4(matrix);
			object3d.position.add(velocity);
		}
	}
}