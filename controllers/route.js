
const { Router } =require ("express");
const data=require('../model/data')
const { object, string, number,array } = require('yup');
const router = Router();
module.exports=router;

let userSchema = object({
    title: string().required(),                                        
    price: number().positive().required(),
    description: string().required(),
    categoryId: number().integer().required(),
    images: array(string().url()),
  });

    //find all products
    router.get('/products',(req,res)=>{
    res.send(data);
    })
    
    //find only one product by id
    router.get('/products/:id',(req,res)=>{
    let {id}=req.params;  
    let filteredProduct=data.find(product=>product.id==id);
    res.send(filteredProduct);
    })
    
    //post new product
    router.post('/products',(req,res)=>{
        let product = userSchema.validateSync(req.body, { strict: true });
        let id = Math.floor(Math.random()*10000);
        let createdDate=new Date();
        product={"id":id,...product,"creationAt":createdDate,"updatedAt":createdDate};
        data.push(product);
        res.send(product);
    })
    
    //update product
    router.put('/products/:id',(req,res)=>{
        let product = userSchema.validateSync(req.body, { strict: true });
        let {id}=req.params;
        let udatedDate=new Date();
        let filteredProductIndex=data.findIndex(product=>product.id==id);
        let updatedproduct={"id":Number(id),
        ...product,
        "creationAt":data[filteredProductIndex].creationAt,
        "updatedAt":udatedDate};
        data[filteredProductIndex]=updatedproduct;
        res.send(updatedproduct);  
    })
    
    //delete product
    router.delete('/products/:id',(req,res)=>{
        let {id}=req.params;
        let filteredProductIndex=data.findIndex(product=>product.id==id);
        data.splice(filteredProductIndex,1);
        res.send("true");
    })