
const express=require("express");
const path=require("path");
const app=express();


/*Routes*/
 app.get('/',(req ,res)=>{
        res.sendFile(path.resolve(__dirname, './views/home.html'));
 });



app.listen(3000, ()=> console.log('server corriendo') )