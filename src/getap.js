import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function getap() {
  return (
    <div>
      <h1>Headline</h1>
      <h2>Subline</h2>

      <MyComponent />
    </div>
  );
}

function MyComponent() {

  const [data, setData] = useState('');
  useEffect(() => {
    function getProductPriceJumbo(id) {
        fetch("https://gorest.co.in/public/v1/todos"  
          //  method: "GET",
        )
           .then((response) => response.json())
           .then((data) => {
               return data[0].id;
           });
         }
  }, []);}

