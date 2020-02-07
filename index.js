var esprima = require("esprima");
var escodegen = require("escodegen");

// Declare the program
var program = `



console.log("ashesh"); 

//spacing

console.log("yasir");


`;

//Parsing the code with esprima which will give us the AST
var parsedCode = esprima.parseScript(program);

console.log(JSON.stringify(parsedCode))

//Manuplating that AST to change the name
parsedCode.body[0].expression.arguments[0].value = "yasir";

//Generating JS code with escodegen from the manuplated AST
var generateJs = escodegen.generate(parsedCode);



console.log(generateJs);
eval(generateJs);