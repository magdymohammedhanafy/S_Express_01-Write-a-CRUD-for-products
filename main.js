let express=require('express');
const { date } = require('yup');
let handler=require("./middle_ware/handler");
const route=require('./controllers/route')

let app=express();
let data=[];
app.use(express.json());
app.use('/',route)
app.use(handler);
app.listen(3000,()=>{
console.log('server is listening to port 3000 ,http://localhost:3000');
});