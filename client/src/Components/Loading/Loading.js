import React from "react";
import { Link } from "react-router-dom";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
      <Link to="/">
        <button>Back to start</button>
      </Link>
    </div>
  );
};

export default Loading;
