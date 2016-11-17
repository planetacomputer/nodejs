var fs = require('fs');

console.log("hola");
fs.readFile("Welcome.mp4", function(error, archivo){
   console.log("archivo");
})
console.log("ya!");