import React from "react";
import tinto1 from "../assets/rio-tinto-1.webp";
import tinto2 from "../assets/rio-tinto-2.webp";
import tinto3 from "../assets/rio-tinto-3.webp";
import "../styles/TintoPhotos.scss";

const TintoPhotos = () => {
  return (
    <>
      <div className="images-container">
        <img className="tinto-img" src={tinto1}></img>
        <img className="tinto-img middle" src={tinto2}></img>
        <img className="tinto-img" src={tinto3}></img>
      </div>
    </>
  );
};

export default TintoPhotos;
