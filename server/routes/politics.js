const express=require("express")
const NewsAPI = require('newsapi');
const router=express.Router()
const getSportsData=require("../index");

router.get("/politics",(req,res)=>{
         const {description,url,}=req.body(getSportsData)

         console.log(description);
})
