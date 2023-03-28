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
    // fetch("https://www.thecolorapi.com/id?hex=441212")
    function getProductPriceJumbo(id) {
        fetch("https://gorest.co.in/public/v1/todos" + id + "/", {
           method: "GET",
        })
           .then((response) => response.json())
           .then((data) => {
               return data[0].id;
           });
         }
  }, []);}
//   return (
//    function getProductPriceJumbo(id) {
//    fetch("https://---/test.php?id=" + id + "/", {
//       method: "GET",
//    })
//       .then((response) => response.json())
//       .then((data) => {
//           return data[0].price;
//       });
//     }
