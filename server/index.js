const { response } = require("express");
const express=require("express")
const NewsAPI = require('newsapi');
const app=express()

const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
       res.send("Hello Prince");
})


const newsapi = new NewsAPI('2292dd63ee6847348b0b9da43aa8e374');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  //console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
 // console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'sports',
  language: 'en',
  country: 'us'
}).then(response => {
 //console.log(response);
      return response;
   // const sportsData=response;
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});

newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
 //console.log(responseTechnology);
     return response;
   // const sportsData=response;
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});

//console.log(newsapi);

module.exports.getSportsData=response;
module.exports.getTechnologyData=response;





app.listen(PORT,()=>console.log(`Server is Running on port ${PORT}`))