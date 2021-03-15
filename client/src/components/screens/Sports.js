import React from "react";

export default function Sports(){


      const getSportsData=()=>{
                fetch("/sports")
                .then(response=>response.json())
                .catch(err=>{
                    console.log(err);
                })
      }
      

          return (
              <>
              <h1>Sports</h1>
              </>
          )
}