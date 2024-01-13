const fs = require("fs"); //const file system (fs) to read files on my pc 

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

  setImageShape(shape) {
    this.imageShape = shape;
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  renderSvg(background, text) {
    return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">' + 
             background + 
             text + 
           '</svg>';
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
  constructor(shapeColor, text, textColor) {
    this.shape = new Shape('triangle', shapeColor, text, textColor);
  }

  render() {
    let background = '<polygon points="150, 18 244, 182 56, 182" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">' + this.shape.text + '</text>';
    return this.shape.renderSvg(background, text);
  }

  // Call this function to render and save the logo
  createLogo() {
    return this.shape.saveFile(this.render());
  }
};

class Circle {
  constructor(shapeColor, text, textColor) {
    this.shape = new Shape('circle', shapeColor, text, textColor);
  }

  render() {
    let background = '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
    return this.shape.renderSvg(background, text);
  }

  // Call this function to render and save the logo
  createLogo() {
    return this.shape.saveFile(this.render());
  }
};

class Square {
  constructor(shapeColor, text, textColor) {
    this.shape = new Shape('square', shapeColor, text, textColor);
  }

  render() {
    let background = '<square width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"    ="' + this.shape.shapeColor + '" />';
    let text = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '"> '+ this.shape.text + '</text>';
    return this.shape.renderSvg(background, text);
  }

  // Call this function to render and save the logo
  createLogo() {
    return this.shape.saveFile(this.render());
  }
};

module.exports = {
  Triangle,
  Circle,
  Square
};






