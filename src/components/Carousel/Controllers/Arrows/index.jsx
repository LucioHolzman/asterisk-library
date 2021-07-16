import React, { useContext } from "react";
import { API_CONTEXT } from "../../../../context";
import "./controllers.css";

export const ArrowLeft = () => {
  const { setCalc, calc } = useContext(API_CONTEXT);

  return (
    <div className="container-button">
      <div className="arrow arrow-left" onClick={() => setCalc(calc + 1)}>
        <img src="arrow-left.svg" alt="" />
      </div>
    </div>
  );
};
export const ArrowRight = () => {
  const { setCalc, calc } = useContext(API_CONTEXT);

  return (
    <div className="container-button">
      <div className="arrow arrow-right" onClick={() => setCalc(calc - 1)}>
        <img src="arrow-right.svg" alt="" />
      </div>
    </div>
  );
};
