const express=require("express");
const app=express();

// 

// let port=3000;
let port=8080;



app.listen(port,()=>{

console.log(`app is listening on port   ${port}`); 
});
 

app.get("/",(req,res)=>{
    res.send("you contacted root path");
});

app.get("/help",(req,res)=>{
    res.send("i am help you contacted me hi");
});

app.get("/about",(req,res)=>{
    res.send(" you contacted about my path ");
});

// after all defined use that 
// app.get("*",(req,res)=>{
//     res.send("this path does not exist demo text   ");
// });




app.post("/",(req,res)=>{
    res.send("you contacted post");
});

app.get("/:username/:id",(req,res)=>{
    
let {username,id}=req.params;

    // console.log(req.params);
    // res.send("hello i am root ");
    // res.send(`welcome to the page of @${username}`);

let htmlstr=`<h1>welcome to the page of @${username}</h1>`

res.send(htmlstr);

});






// app.use((req,res)=>{
//     // console.log(req);
//     console.log(" new incoming request  ");
//     // res.send("this is a basic response");

// // res.send({
// //     name:"fruit",
// //     color:"red"
// // })


// let code="<h1>fruits <ul><li>orange</li><li>apple</li></ul></h1>";
// res.send(code);


// });








