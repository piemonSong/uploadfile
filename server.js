var http = require("http");
var url=require("url");
function start(route,handle){
	http.createServer(function(req,res){
	console.log("request start");
	var pathname=url.parse(req.url).pathname;
	console.log("Request for"+pathname+"receive");
	
/* 	var postData="";
	req.setEncoding("utf8");
	
	req.addListener("data",function(postDatachunk){
		postData+=postDatachunk;
		console.log("post data chunk "+postDatachunk);
	});	
	req.addListener("end",function(){
		route(pathname,handle,res,postData);
		
	}); */
	
	route(pathname,handle,res,req);
	}).listen(8888,"127.0.0.1")
	console.log("server start");
}
exports.start=start;