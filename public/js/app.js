var socket = io();

socket.on('connect', function () {
	console.log('connected to io.server');
})