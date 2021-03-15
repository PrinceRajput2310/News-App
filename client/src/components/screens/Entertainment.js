import React from "react";

export default function Entertainment(){

    const getSportsData=()=>{
        fetch("/entertainment")
        .then(response=>response.json())
        .catch(err=>{
            console.log(err);
        })
}
          return (
              <>
              <h1>Entertainment</h1>
              </>
          )
}