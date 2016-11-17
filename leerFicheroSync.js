var fs = require('fs');
var operaciones =  require('./operaciones');

// Synchronous read
var data = fs.readFileSync('cdcatalog.xml');
//console.log("Synchronous read: " + data.toString());
var resultado = operaciones.multiplicar(process.argv[2],process.argv[3]);
console.log("El resultado de la multiplicacion es " + resultado);
console.log("El numero de parametros pasados es " + (process.argv.length-2));
console.log("Program Ended");