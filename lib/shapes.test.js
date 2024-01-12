const Shape = require('../lib/shapes.js')

// A testing suite for Shapes is created.
describe('Shapes', () => {
  // Triangle test
  describe('triangle', () => {
    it('should return a polygon with specific points to form a triangle', () => {
      // const shape = triangle;
      const triangle = new Shape.Triangle("red", "hi", "yellow"); //shapeColor, text, textColor
      console.log(triangle);
      triangle.setShapeColor("blue");
      console.log(triangle);
      console.log(triangle.render());
      expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');   
    });
  });
});
