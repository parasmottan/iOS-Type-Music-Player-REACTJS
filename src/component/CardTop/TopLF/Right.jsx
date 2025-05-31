import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./right.css";

function Right() {
  const [heartClr, setHeart] = useState("#fff");

  const heartbgchnge = () => {
    if (heartClr == "#fff") {
      setHeart("#DD2A7B");
    } else {
      setHeart("#fff");
    }
  };

  return (
    <div className="right">
      <FaHeart
        className="heart"
        style={{ color: heartClr }}
        onClick={heartbgchnge}
      />
    </div>
  );
}

export default Right;
