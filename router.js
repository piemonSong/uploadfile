function route(pathname,handle,res,req){
	console.log("About route a request"+pathname);
	if(typeof handle[pathname]==="function"){
		  handle[pathname](res,req);
	}else{
		console.log("NO request for"+pathname);
			res.writeHead(404,{"Content-Type":"text/plain"});
			res.write("404 NOT FOUND");
			
			res.end();
	}
}
exports.route =route;
exports.route =route;