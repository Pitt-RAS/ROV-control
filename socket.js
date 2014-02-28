var initSocket = function(){
	if ('WebSocket' in window){
   /* WebSocket is supported. You can proceed with your code*/
   var connection = new WebSocket('ws://example.org:12345/myapp');
   		consoleonnection.onopen = function(){
   /*Send a small message to the console once the connection is established */
   			console.log('Connection open!');
		}
	   connection.onclose = function(){
   			console.log('Connection closed');
		}
		return connection;
	} else {
   /*WebSockets are not supported. Try a fallback method like long-polling etc*/

	}
}

var send = function(c, s){
	c.send(s);	
}

var setupReceiver = function(c){
		c.onmessage = function(e){
   		var server_message = e.data;
   		console.log(server_message);
	}
}