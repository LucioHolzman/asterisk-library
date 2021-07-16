import React, {useState} from 'react'
import './card.css'

export const Card = ({children}) => {
    const [axis, setAxis] = useState({
        axisX: 0,
        axisY: 0,
    })

    const {axisX, axisY} = axis;

    const handleMouseMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTransition(false);
        console.log(e.nativeEvent.layerX / 2);
        const x = window.innerWidth / 2 - e.clientX;
        const y = window.innerHeight / 2 - e.clientY;
        setAxis({axisX: (x / 8), 
            axisY: (y / 8)});
    }
    const [transition, setTransition] = useState(false)

    const onMouseLeave = (e) => {
        setTransition(true);
        setAxis({axisX: 0, axisY: 0});
    }
    return (
        <div className="card">
        <div
        className="container-card"  
        onMouseOut={(e) => onMouseLeave(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        style={{"--axis-rotate-x": `${-axisX}deg`, "--axis-rotate-y": `${-axisY}deg`, transition:`${transition ? "transform 1s ease": ""}`}}
        >
            {children}
        </div>
        </div>
    )
}
