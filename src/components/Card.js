import React from "react";
import "./cardStyle.css";

function Card(props) {
  return (
    <div className="card">
      {/* <div className="img-container"> */}
        <img alt={props.name} src={props.image} 
         onClick={() => props.handleClick(props.image)}/>
      {/* </div> */}
    </div>
  );
}

export default Card;
