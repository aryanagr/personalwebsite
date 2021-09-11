const express=require('express');

const dotenv=require('dotenv');
const app=express();
app.use(express.json());

dotenv.config({path: './config.env'});

require('./db/conn');

app.use(require('./router/auth'));

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}

 const PORT=process.env.PORT||4000

 




app.listen(PORT,(()=>{console.log("run")}))

