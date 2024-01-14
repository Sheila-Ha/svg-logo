const inquirer = require("inquirer"); //npm special software - const variable can not be reassigned
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt') //added package to prompt the maxlength for 3 char prompt
const fs = require("fs"); //const file system (fs) to read files on my pc 
const Shapes = require("./lib/shapes"); 

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);  //setting max

// prompted for input to messages
const prompts = [ //inquirer prompts I've added
 
    //npm installed inquirer-maxlength-input-prompt
  {
    type: "maxlength-input",
    name: "text",
    maxLength: 3,
    message: "Enter up to 3 characters:"
  },
  
  {
    type: "input",
    name: "textColor",
    message: "Enter text color or hexadecimal:"
  },

  {
    type: "rawlist",
    name: "shape",
    message: "Select a shape:",
    choices: ["Circle", "Triangle", "Square"]
  },

  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color or hexadecimal:"
  }
];

// all prompts done = svg file is created named 'logo.svg'
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
    
    // output text "Generated logo.svg" is printed to command line
    const result = generateLogo(responses);
    console.log(result);

    // open 'logo.svg' file in browser
    fs.readFile('index.html', 'r', function (err, f) {
        console.log('opened file');
        console.log(err);
    });

    // navigate to svg-logo, output, index.html open in default browser = view created 300 x 200 pixel img

  }).catch((err) => {
    //console.log(err);
  });
}
//function call to initialize
init();
//console.log('initializing the app...');
