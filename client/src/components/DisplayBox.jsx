import React from 'react';
// will need to import component to use styles module
// import React, { Component } from 'react';
// import styles from './DisplayBox.module.css';


const DisplayBox = (props) => {
  const {colorArray} = props;
  return (
    <div>{
        colorArray.map((color,index) => ( 
        <div key={index} style={{ 
              display: "inline-block",
              margin: "20px",
              height: "100px", 
              width: "100px", 
              border: "1px solid grey",
              backgroundColor: color
              }}>
            </div>
            
          ))
        }
    </div>
  );
}

export default DisplayBox