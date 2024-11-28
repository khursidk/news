const express=require('express')
const cors=require('cors');
const bodyParser= require('body-parser')

const app=express();
app.use(cors());
app.get('/api/data',(req,res)=>{
    res.json({message:'hello world'})
})
app.use(bodyParser.json());
app.listen(8000,()=>{
    console.log('server started')
})