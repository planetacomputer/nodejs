for (var i=0; i<10; i++) {
	console.log('Hola Mundo');
}

setTimeout(function() {
  console.log('Hola NodeJS-1');
}, 2000);

setTimeout(function() {
  console.log('Hola NodeJS-2');
}, 3000);

/*setInterval(function() {
  console.log('Hola NodeJS Intervalo');
}, 1000);*/
console.log(global);