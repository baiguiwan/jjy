var express=require("express")
var app=express();
app.use("/" ,express.static(__dirname))
app.listen(800)
console.log("server started at 800")