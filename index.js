const express=require("express");
const app=express();

// 

// let port=3000;
let port=8080;



app.listen(port,()=>{

console.log(`app is listening on port   ${port}`); 
});
 

app.use((req,res)=>{
    // console.log(req);
    console.log(" new incoming request  ");
    // res.send("this is a basic response");

// res.send({
//     name:"fruit",
//     color:"red"
// })


let code="<h1>fruits <ul><li>orange</li><li>apple</li></ul></h1>";
res.send(code);


});








