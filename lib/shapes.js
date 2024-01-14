//const file system (fs) to write files on my pc 
const fs = require("fs");

// Classes Shape, Triangle, Circle, and Square are created.
// Class Shape contains shared logic used by Triangle, Circle, and Square
class Shape {
  constructor(imageShape) {
    this.imageShape = imageShape;
  }
  //passing color into setShapeColor
  setShapeColor(color) {
    this.shapeColor = color;
  }
  //passing text into setText
  setText(text) {
    this.text = text;
  }
  //passing color into setTextColor
  setTextColor(color) {
    this.textColor = color;
  }
  //save date and return svg log - catch error and return the error
  saveFile(data) {
    try {
      fs.writeFileSync("output/logo.svg", data); // write file (synchronous version)
      return 'Generated logo.svg';  
    } catch (error) {
      return error;
    }
  }
}
//Created a new shape, triangle
class Triangle {
  constructor() {
    this.shape = new Shape('triangle');
  }
  //passing color into setShapeColor
  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }
  //passing text into setText
  setText(text) {
    this.shape.setText(text);
  }
  //passing color into setTextColor
  setTextColor(color) {
    this.shape.setTextColor(color);
  }
   //creating the 2 lines to output in the svg
  render() {
    let background = '<polygon points="150, 18 244, 182 56, 182" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="150" y="125" font-size="50" text-anchor="middle" fill="' + this.shape.textColor + '">' + this.shape.text + '</text>';
    return background + text;
  }
  // Call this function to render and return/save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};
//Created a new shape, circle
class Circle {
  constructor(shapeColor) {
    this.shape = new Shape('circle');
  }
  //passing color into setShapeColor
  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }
  //passing text into setText
  setText(text) {
    this.shape.setText(text);
  }
  //passing text into setTextColor
  setTextColor(color) {
    this.shape.setTextColor(color);
  }
   //creating the 2 lines to output in the svg
  render() {
    let background = '<circle cx="100" cy="100" r="98" stroke="black" stroke-width="3" fill="' + this.shape.shapeColor + '" />';
    let text = '<text x="100" y="120" font-size="50" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
    return background + text;
  }
  // Call this function to render and return/save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};
//created a new shape, square
class Square {
  constructor() {
    this.shape = new Shape('square');
  }
  //passing color into setShapeColor
  setShapeColor(color) {
    this.shape.setShapeColor(color);
  }
  //passing text into setText
  setText(text) {
    this.shape.setText(text);
  }
  //passing color into setTextColor
  setTextColor(color) {
    this.shape.setTextColor(color);
  }
   //creating the 2 lines to output in the svg
  render() {
    let background = '<rect width="200" height="200" style="fill:' + this.shape.shapeColor + ';stroke-width:3;stroke:black" />';
    let text = '<text x="100" y="120" font-size="50" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
    return background + text;
  }
  // Call this function to render and return/save the logo
  createLogo() {
    let svgCode = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">' + 
                    this.render() + 
                  '</svg>';
    return this.shape.saveFile(svgCode);
  }
};
//defines the object that is created when the file is imported using require
module.exports = {
  Triangle,
  Circle,
  Square
};






