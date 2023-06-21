const erorrHandle=(erorr,req,res,next)=>{
console.log(erorr);
res.status(400).json({mesage:erorr.message});
}

module.exports=erorrHandle;