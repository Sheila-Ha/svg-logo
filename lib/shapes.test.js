const Shapes = require("../lib/shapes.js");

// A testing suite for Shapes is created.
describe("Shapes", () => {
  // Triangle render test
  describe("triangleRender", () => {
    it("should return a polygon with specific points to form a triangle", () => {
      //arrange
      const triangle = new Shapes.Triangle();
      const shapeColor = "blue";
      const text = "hi";
      const textColor = "yellow";
      triangle.setShapeColor(shapeColor);
      triangle.setText(text);
      triangle.setTextColor(textColor);
      const expectedResult =
        '<polygon points="150, 18 244, 182 56, 182" fill="' +
        shapeColor +
        '" />' +
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' +
        textColor +
        '">' +
        text +
        "</text>";
      //act
      const result = triangle.render();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });

  // Triangle create test
  describe("triangleCreateLogo", () => {
    it("should create an svg file", () => {
      //arrange
      const triangle = new Shapes.Triangle();
      triangle.setShapeColor("red");
      triangle.setText("SVG");
      triangle.setTextColor("black");
      const expectedResult = "Generated logo.svg";
      //act
      const result = triangle.createLogo();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });

  // Circle render test
  describe("circleRender", () => {
    it("should return a circle", () => {
      //arrange
      const circle = new Shapes.Circle();
      const shapeColor = "purple";
      const text = "VIK";
      const textColor = "yellow";
      circle.setShapeColor(shapeColor);
      circle.setText(text);
      circle.setTextColor(textColor);
      const expectedResult =
        '<circle cx="100" cy="100" r="98" stroke="black" stroke-width="3" fill="' +
        shapeColor +
        '" />' +
        '<text x="100" y="120" font-size="60" text-anchor="middle" fill="' +
        textColor +
        '">' +
        text +
        "</text>";
      //act
      const result = circle.render();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });

  // Circle create test
  describe("circleCreateLogo", () => {
    it("should create an svg file", () => {
      //arrange
      const circle = new Shapes.Circle();
      circle.setShapeColor("purple");
      circle.setText("VIK");
      circle.setTextColor("yellow");
      const expectedResult = "Generated logo.svg";
      //act
      const result = circle.createLogo();
      //assert
      expect(result).toEqual(expectedResult);
    });
  });

  // Shapes.Square
});
