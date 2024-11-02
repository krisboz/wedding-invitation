import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../styles/Loading.scss";

const Loading = () => {
  return (
    <div className="spinner-container">
      <AiOutlineLoading3Quarters />
    </div>
  );
};

export default Loading;
