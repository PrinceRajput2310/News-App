const express=require("express")
const NewsAPI = require('newsapi');
const router=express.Router()
const getSportsData=require("../index");

router.get("/sports",(req,res)=>{
        // const {description,url,}=req.body(getSportsData)

         console.log(getSportsData.map(items=>items.url));
        // console.log(url);
})