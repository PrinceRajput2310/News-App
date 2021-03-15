const express=require("express")
const NewsAPI = require('newsapi');
const router=express.Router()
const getSportsData=require("../index");
const getTechnologyData=require("../index");

router.get("/technology",(req,res)=>{
         const {description,url,}=req.body(getTechnologyData)

         console.log(description);
})





