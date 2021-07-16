import React, {useContext} from 'react'
import './box.css'
import { API_CONTEXT } from "../../../../context";

export const Box = ({ivalue, element}) => {

const { position } = useContext(API_CONTEXT);

    return (
        <div 
        className={position === 'v' || position === 'V' ? 'vertical-carousel box' : 'horizontal-carousel box' } 
        style={{"--i":`${ivalue}`}}>
           <img className="content-box" src={element} alt="" />
           {/* <iframe src="https://open.spotify.com/embed/track/7oHsIIDKbEJlFULg1HF0pP" width="100%" height="100%" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="content-box"></iframe> */}
        </div>
    )
}
