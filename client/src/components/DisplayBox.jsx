import React from 'react'


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
              backgroundColor: color
              }}>
            </div>
          ))
        }
    </div>
  );
}

export default DisplayBox