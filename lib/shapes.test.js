const Shapes = require('../lib/shapes.js')

// A testing suite for Shapes is created.
describe('Shapes', () => {
  // Triangle render test
  describe('triangleRender', () => {
    it('should return a polygon with specific points to form a triangle', () => {
      //arrange
      const triangle = new Shapes.Triangle("red", "hi", "yellow"); //shapeColor, text, textColor
      triangle.shape.setShapeColor("blue");
      const expectedResult = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">' + 
                             '<polygon points="150, 18 244, 182 56, 182" fill="blue" />' + 
                             '<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">hi</text>' + 
                             '</svg>';
      //act
      const result = triangle.render();
      //assert
      expect(result).toEqual(expectedResult);   
    });
  });

  // Triangle create test
  describe('triangleCreateLogo', () => {
    it('should create an svg file', () => {
      //arrange
      const triangle = new Shapes.Triangle("red", "hi", "yellow"); //shapeColor, text, textColor
      const expectedResult = 'Generated logo.svg';
      //act
      const result = triangle.createLogo();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });
});


// function Shape(imageShape, shapeColor, text, setTextColor) {
//   this.imageShape = imageShape;
//   this.imageColor = this.imageColor;
//   this.text = text;
//   this.textColor = textColor;
//   this.comment = [];
//   this.printMetaData = function (){
//     console.log(`Created by ${this.imageShape} on ${this.imageColor}`);
//   };
// }

// Shape.prototype.addComment = function (comment) {
//   this.comments.push(comment);
// };

// const shape = new imageShape(
//   'Triangle',
//   'Green',
//   'SVG',
//   'White'
//   );

//   shape.addComment("Triangle!");

//   console.log(shape.comments);
