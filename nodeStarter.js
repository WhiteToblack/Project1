
var httpSunucu = require('http');

var httpSunucu = httpSunucu.createServer(function(talep, cevap){
	cevap.writeHead(
		200, 
		{"Content-Type" : "text/html;charset=utf-8"}
	);
	cevap.end("<h1>Hoş geldiniz!</h1><br /><b>node.Js sunucusu üzerinde çalışıyorsun. Kolay gelsin ;)</b>");
});

httpSunucu.listen(1453);
console.log("Sunucu 1453 portunda başlatıldı.");