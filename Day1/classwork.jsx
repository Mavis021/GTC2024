// import React from 'react';
import React, { useState } from 'react';



 const ClassWork = () => {
    const [showData, setShowData] = useState(false);
    // const [buttonClicked, setButtonClicked] = useState(false);
  
    // const displayTable = () => {
    //     displaydata()
    //     setButtonClicked(true);
    // };
    const data = [
      { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
       { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
       { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
       { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
       { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
       { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
     ];

     const show = () => {
      setShowData(true);
     }

  
    return (
      <div>
        {/* <h2>{props.title}</h2> */}
  
        <button onClick={show}>Display</button>
  
        {showData?     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stocked</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.stocked === 'yes' ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>:<p></p>}
  
      </div>
    );
    

  };
  
 export default ClassWork;