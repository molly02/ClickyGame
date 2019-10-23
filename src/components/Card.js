import React from "react";
import "./cardStyle.css";

function Card(props) {
  return (
    <div className="card">
      {/* <div className="img-container"> */}
        <img src={props.image} 
        // onClick={props.image}
         />  
        <span onClick={() => props.removeFriend(props.image)} className="remove">
        𝘅
      </span>
      {/* </div> */}
    </div>
  );
}

export default Card;

// function Card(props) {
//   return (
//     <div className="card">
//       {/* <div className="img-container"> */}
//         <img alt={props.name} src={props.image} 
//          onClick={() => props.handleClick(props.image)}/>
//       {/* </div> */}
//     </div>
//   );