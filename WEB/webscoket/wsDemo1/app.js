var http=require('http');
var server=http.createServer(function(request,response){});
server.listen(1740,function(){
	console.log((new Date())+'Server is listening on port 1740');
})

var WebSocketServer=require('websocket').server;
var wsServer=new WebSocketServer({
	httpServer:server
});

var connection;
wsServer.on('request',function(req){
	connection=req.accept('echo-protocol',req.origin);
	
	connection.on('close', function(reasonCode, description) {
	 
	 console.log(connection.remoteAddress + ' disconnected.');
	 
	});
});