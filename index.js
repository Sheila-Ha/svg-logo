const inquirer = require("inquirer"); //npm special software - const variable can not be reassigned
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require("fs"); //const file system (fs) to read files on my pc 
const Shapes = require("./lib/shapes");

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// TODO: prompted for Text
const prompts = [
 
  // TODO: enter up to 3 char 
  //npm install inquirer-maxlength-input-prompt
  {
    type: "maxlength-input",
    name: "text",
    maxLength: 3,
    message: "Enter up to 3 characters:"
  },
  
  // // TODO: prompted for text color
  // {
  //   type: "",
  //   name: " ",
  //   message: "",
  // },

// TODO: enter color keyword or hexadecimal
  {
    type: "input",
    name: "textColor",
    message: "Enter text color or hexadecimal:"
  },
// // TODO: prompted for a shape
//   {
//     type: "input",
//     name: " ",
//     message: ""
//   },

// TODO: presented w/ a list of shapes (cir/tri/sq)
  {
    type: "rawlist",
    name: "shape",
    message: "Select a shape:",
    choices: ["Circle", "Triangle", "Square"]
  },

// // TODO: prompted for shapes color
//   {
    
//   },

// TODO: enter color keyword or hexadecimal
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color or hexadecimal:"
  }
];

// TODO: all prompts done = svg file is created named 'logo.svg'
// function writeToFile(fileName, data) {
//   console.log(data);
//   fs.writeFileSync(fileName, data); //write file (synchronous version)
// }

function generateLogo(responses){
  let logo;
  // responses.shape
  if (responses.shape == "Circle") {
    logo = new Shapes.Circle();
  }
  else if (responses.shape == "Triangle") {
    logo = new Shapes.Triangle();
  }
  else {  // Default to square
    logo = new Shapes.Square();
  }
  
  // Set properties of the shape
  logo.setShapeColor(responses.shapeColor);
  logo.setText(responses.text);
  logo.setTextColor(responses.textColor);

  return logo.createLogo();
}

function init () {
  inquirer.prompt(prompts).then((responses) => {   //ask questions, then proceed with responses
    console.log(responses);
    //console.log(responses.shapes);
    
    // TODO: output text "Generated logo.svg" is printed to command line
    const result = generateLogo(responses);
    console.log(result);

    // TODO: open 'logo.svg' file in browser
    fs.open("index.html", 'r', function (err, f) {
        console.log('opened file');
        console.log(err);
    });

    // TODO: I'm shown a 300 x 200 pixel img that matches criteria

    // console.log(logo);
    // writeToFile("output/logo.svg", logo); //write a new output file from responses using generateLogo
    //console.log("Creating your Logo File...");
  }).catch((err) => {
    //console.log(err);
  });
}
//function call to initialize
init();
//console.log('initializing the app...');

/* Example SVG:
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="green"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
*/