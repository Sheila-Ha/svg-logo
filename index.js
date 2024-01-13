const inquirer = require("inquire"); //npm special software - const variable can not be reassigned
const fs = require("fs"); //const file system (fs) to read files on my pc 
const generateLogo = require("./output/logo"); //require is built in function, passing location name as argument
const { Triangle } = require("./lib/shapes");

// TODO: prompted for Text
const prompts = [
 
  // TODO: enter up to 3 char
  {
    type: "input",
    name: " ",
    message: "Enter up to 3 characters",
  },
  
  // TODO: prompted for text color
  {
    type: "input",
    name: " ",
    message: "Text color",
  },

// TODO: enter color keyword or hexadecimal
  {
    type:  "input",
    name: " ",
    message: "Type color or hexadecimal",
  },
// TODO: prompted for a shape
  // {
  //   type: "input",
  //   name: " ",
  //   message: ""
  // },

// TODO: presented w/ a list of shapes (cir/tri/sq)
  {
    type: "rawlist",
    name: "shapes",
    message: "Select a shape",
    choices: ["Circle, Triangle, Square"],
  },

// TODO: prompted for shapes color
//   {
    
//   },

// TODO: enter color keyword or hexadecimal
  {
    type: "input",
    name: " ",
    message: "Type a color or hexadecimal",
  },

// TODO: all prompts done = svg file is created named 'logo.svg'
function writeToFile(fileName, data) { //function
  fs.writeFileSync(fileName, data); //write file (synchronous version)
}

// TODO: output text "Generated logo.svg" is printed to command line


// TODO: open 'logo.svg' file in browser


// TODO: I'm shown a 300 x 200 pixel img that matches criteria

]

function init () {
  inquirer.prompt(questions).then((responses) => {   //ask questions, then proceed with responses
    //console.log(responses);
    //console.log(responses.shapes);
    writeToFile("output/logo" , generateLogo(responses)); //write a new output file from responses using generateLogo
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