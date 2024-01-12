const Triangle = require('../lib/shapes.js')

// A testing suite for Shapes is created.
describe('Shapes', () => {
  // Triangle test
  describe('triangle', () => {
    it('should return a polygon with specific points to form a triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');   
    });
  });
});
