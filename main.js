let express=require('express');
const { date } = require('yup');
const route=require('./controllers/route')

let app=express();
let data=[];
app.use(express.json());

app.use('/',route)


app.listen(3000,()=>{
console.log('server is listening to port 3000 ,http://localhost:3000');
})



 

 


  
 



 /* {
    "title": "Change title",
    "price": 100
  }*/


  /*{
    "title": "New Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }*/