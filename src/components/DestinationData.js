import React from "react";
import "./DestinationStyles.css";

function DestinationData({ heading, text, imge, imge2, className }) {
  return (
    <div className={className}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img alt="img" src={imge} />
        <img alt="img" src={imge2} />
      </div>
    </div>
  );
}

export default DestinationData;
