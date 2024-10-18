var app = require( "express" )();
var http = require( "http").createServer( app );
const PORT = 3000;
app.get( "/", function( req, res ) {
res.send( __dirname + "/public/index.html" );
});
http.listen( PORT, function() {
console.log( "listening on *:" + PORT );
});