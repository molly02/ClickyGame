import React from "react";
import "./cardStyle.css";

function Card(props) {
  return (
    <div className="card">
      {/* <div className="img-container"> */}
        <img onClick={() => props.random(props.image)}  src={props.image} 
        // onClick={props.image}
         />  
      {/* </div> */}
    </div>
  );
}

export default Card;
