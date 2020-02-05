var esprima = require("esprima");
var escodegen = require("escodegen");

// Declare the program
var program = 'console.log("ashesh")';

//Parsing the code with esprima which will give us the AST
var parsedCode = esprima.parseScript(program);

//Manuplating that AST to change the name
parsedCode.body[0].expression.arguments[0].value = "yasir";

//Generating JS code with escodegen from the manuplated AST
var generateJs = escodegen.generate(parsedCode);

//running the generated js code
eval(generateJs);
