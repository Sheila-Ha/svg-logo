const fs = require("fs"); //const file system (fs) to read files on my pc 

// Classes Shape, Triangle, Circle, and Square are created.
class Shape {
  constructor(imageShape) {
    this.imageShape = imageShape;
  }
  /*constructor(imageShape, shapeColor, text, textColor) {
    this.imageShape = imageShape;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }*/

  setShapeColor(color) {
    this.shapeColor = color;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  saveFile(data) {
    try {
      fs.writeFileSync("output/logo.svg", data); // write file (synchronous version)
      return 'Generated logo.svg';  
    } catch (error) {
      return error;
    }
  }
}

class Triangle {
  /*constructor(shapeColor, text, textColor) {
    this.shape = new Shape('triangle', shapeColor, text, textColor);
  }*/
  constructor() {
    this.shape = new Shape('triangle');
  }

  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }

  setText(text) {
    this.shape.setText(text);
  }

  setTextColor(color) {
    this.shape.setTextColor(color);
  }

  render() {
    let background = '<polygon points="150, 18 244, 182 56, 182" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">' + this.shape.text + '</text>';
    return background + text;
  }

  // Call this function to render and save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};

class Circle {
  constructor(shapeColor) {
    this.shape = new Shape('circle');
  }

  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }

  setText(text) {
    this.shape.setText(text);
  }

  setTextColor(color) {
    this.shape.setTextColor(color);
  }

  render() {
    let background = '<circle cx="100" cy="100" r="98" stroke="black" stroke-width="3" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="100" y="120" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
    return background + text;
  }

  // Call this function to render and save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};

class Square {
  constructor() {
    this.shape = new Shape('square');
  }

  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }

  setText(text) {
    this.shape.setText(text);
  }

  setTextColor(color) {
    this.shape.setTextColor(color);
  }

  render() {
    let background = '<rect width="200" height="200" style="fill:' + this.shape.shapeColor + ';stroke-width:3;stroke:black" />';
    let text = '<text x="100" y="120" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
    return background + text;
  }

  // Call this function to render and save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};

module.exports = {
  Triangle,
  Circle,
  Square
};






