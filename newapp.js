const express=require("express");
const app=express();
const bodyparser=require("body-parser");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
var name=req.body.email;
var pass=req.body.password;
console.log(name+" "+pass);
console.log(res.statusCode);
    res.write("<h1>your email is "+name+" your password is: "+pass+"</h1>");
});
app.listen(process.env.PORT || 3000,function() 
{
    console.log("server is started at port 3000");
});
// aa55b18800636e1ca1b5cedfb3eebe05-us17