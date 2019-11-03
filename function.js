function send(){
	var variableFromFrontEnd = 2;
	var socket = io.connect("/");
	socket.on("connect", function(){
	    console.log("connected!")
	    socket.emit("sendVar", variableFromFrontEnd);
}

io.connect("/").emit("Hello");