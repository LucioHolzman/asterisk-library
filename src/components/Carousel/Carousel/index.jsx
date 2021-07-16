import React, {useContext, useEffect} from "react";
import "./carousel.css";
import { API_CONTEXT } from "../../../context";
import { Box } from "./Box";
export const Carousel = ({ elements, initialPos = 0, width = 300,  height = 150}) => {
    
  const { calc, setCalc } = useContext(API_CONTEXT);
  
  useEffect(() => {
    if(initialPos !== 0) setCalc(initialPos);
  }, [initialPos, setCalc]);
  return (
    <div className="container-carousel">
      <div
        className='carousel'
        style={{
          "--rotate": `${calc}`,
          "--total": `${elements.length}`,
          "--width": `${width}px`,
          "--height": `${height}px`,
        }}
      >
        {
        elements.map((element, index) => (
          <Box 
          element={element} 
          key={index} 
          ivalue={index}
         />
        ))
        }
      </div>
      
    </div>

  );
};
