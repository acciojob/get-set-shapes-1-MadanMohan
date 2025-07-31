class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	getArea() {
		return this._width * this._height;
	}

	get height() {
		return this._height;
	}

	get width() {
		return this._width;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side); // both width and height are equal
	}

	getPerimeter() {
		return 4 * this._width;
	}

	getArea() {
		// Optional: override to clarify intention, but base class already works
		return this._width * this._height;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
