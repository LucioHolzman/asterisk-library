import React, { useContext, useEffect } from "react";
import { API_CONTEXT } from "../../../../context";
import "./position.css";
export const Position = ({ initialPosition, visible=true }) => {
  const { position, setPosition } = useContext(API_CONTEXT);

  useEffect(() => {
    if (initialPosition !== undefined) {
      setPosition(initialPosition);
    }
  }, [initialPosition, setPosition]);

  return (
    <div className="container-position"
    style={visible ? { display: "block" } : { display: "none" }}
    >
      <img
        className="content-position"
        onClick={() => setPosition("h")}
        src={
          position === "h"
            ? "panorama-horizontal-select.svg"
            : "panorama-horizontal.svg"
        }
        alt=""
      />
      <img
        onClick={() => setPosition("v")}
        className="content-position"
        src={
          position === "v"
            ? "panorama-vertical-select.svg"
            : "panorama-vertical.svg"
        }
        alt=""
      />
    </div>
  );
};
