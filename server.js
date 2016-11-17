var http = require("http");
var contador = 0;
var server = http.createServer(function (peticion, respuesta){
   
   var url = peticion.url;
   console.log(peticion.url + " - " + peticion.connection.remoteAddress);
   if(url.indexOf("favicon.ico") == -1){
       contador++;	     
   }
   respuesta.end("Hola DesarrolloWeb.com" + " - " + contador + 
   	" veces. La IP de esta peticion es " + peticion.connection.remoteAddress);
});
server.listen(3000, function(){
   console.log("tu servidor está listo en " + this.address().port );
});