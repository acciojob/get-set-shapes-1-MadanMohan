class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	area() {
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
		super(side, side); // A square has equal width and height
	}

	getPerimeter() {
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
