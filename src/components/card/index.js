import React from "react";
import "./style.css";

function card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
  {/* click to remember */}
    </div>
  );
}

export default card;
