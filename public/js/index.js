var http=require('http'),
port=8000,
host="127.0.0.1";
var server=http.createServer(function(resq,res){
  res.writeHead(200,{"content-Type":"text/plain"}
);
  res.write("Hello World");
  res.end();
});
server.listen(port,host,function()){
  console.log("listening......");
}
