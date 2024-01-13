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

  // Circle render test
 describe('circleRender', () => {
  it('should return a circle', () => {
    //arrange
    const circle = new Shapes.Circle("green", "SVG", "white"); //shapeColor, text, textColor
    circle.shape.setShapeColor("yellow");
    const expectedResult = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">' +
                           '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="' + this.shape.shapeColor + '" />';
                           '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + this.shape.textColor + '">'+ this.shape.text + '</text>';
                           '</svg>';
    //act
    const result = circle.render();
    //assert
    expect(results).toEqual(expectedResult);
  });
 });

  // Circle create test
  describe('circleCreateLogo', () => {
    it('should create an svg file', () => {
      //arrange
      const circle = new Shapes.Circle("green", "SVG", "white"); //shapeColor, text, textColor
      const expectedResult = 'Generated logo.svg';
      //act
      const result = circle.createLogo();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });




  // Shapes.Square

});

