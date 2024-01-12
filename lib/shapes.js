// Classes Shape, Triangle, Circle, and Square are created.
class Shape {
  constructor(imageShape, shapeColor, text, textColor) {
    this.imageShape = imageShape;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  setShapeColor(color) {
    this.shapeColor = color;
  }

  // set imageShape
  // set text
  // set textColor

  generateSvg(background, text) {
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">'
      + background
      + text
    '</svg>';
  }
}

class Triangle {
  constructor(shapeColor, text, textColor) {
    this = new Shape('triangle', shapeColor, text, textColor);

    generateTriangleSvg() {
      let background = '<polygon points="150, 18 244, 182 56, 182" fill="' + this.shapeColor + '" />';
      let text = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.textColor + '">' + this.text + '</text>';
      // instead of returning, create file here
      return Shape.generateSvg(background, text);
    }
  }
};

class Circle {
  constructor(shapeColor, text, textColor) {
    this = new Shape('circle', shapeColor, text, textColor);
  }

  generateCircleSvg() {
    // do like generateTriangleSvg
  }
};

class Square {
  constructor(shapeColor, text, textColor) {
    this = new Shape('square', shapeColor, text, textColor);
  }

  generateSquareSvg() {
    // do like generateTriangleSvg
  }
};

module.exports = {
  Triangle,
  Circle,
  Square
};