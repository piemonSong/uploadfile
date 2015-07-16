//var exec =require("child_process").exec;

var querystring=require("querystring"),
	fs=require("fs"),
	formidable=require("formidable");
function start(res){
console.log("request handle start");
 //function sleep(milliseconds){
/* 	var startTime= new Date().getTime();
	while(new Date().getTime()<startTime+milliseconds);
 }
 sleep(10000); */
 
//return "HELLO START";

//var content="empty";
//ls -lah
/* exec("find /",{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
			res.writeHead(200,{"Content-Type":"text/plain"});
			res.write(stdout);
			console.log(stdout)
			res.end();
}); */
var body ="<html><head><meta http-equiv='Content-Type' content='text/html;charset=UTF-8'></head>"+
	"<body><form action='/upload' enctype='multipart/form-data' method='post'>"+
	"<input type='text' name='title'/><br/><input type='file' name='upload' multiple='multiple'/><br>"+
	"<input type='submit' value='Upload' ></form></body>"
		res.writeHead(200,{"Content-Type":"text/html"});
			res.write(body);
			
			res.end();

}
function upload(res,req){
console.log("request handle upload");
	
	//res.write("Hello upload,you sent:\n"+querystring.parse(postData).text);
	//console.log(res);
	
	var form = new formidable.IncomingForm({uploadDir:"./tempfile"});
	//formidable.IncomingForm.UPLOAD_DIR = "./tmp/test.png";
	form.parse(req,function(error,fileds,files){
	console.log("parsing done");
	//form.uploadDir='tmp';
 	//try{
		console.log(files.upload.path);
		fs.renameSync(files.upload.path,"./tmp/test.png");
		//}catch(e){
		//	 console.log(e);
		//} 
		res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});
		res.write("recevied image<br>");
		res.end("<img src='/show'/>");
	});
	
}
function show(res){
console.log("request handle show");
fs.readFile("./tmp/test.png","binary",function(error,file){
		if(error){
			res.writeHead(500,{"Content-Type":"text/plain"})
			res.write(error+"\n");
			res.end();
		}else{
			res.writeHead(200,{"Content-Type":"image/png"})
			res.write(file,"binary");
			res.end();
		}
	})
}
exports.start=start;
exports.upload=upload;
exports.show=show;
