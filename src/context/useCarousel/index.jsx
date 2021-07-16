import {useState} from 'react'

export const useCarousel = () => {

    const [calc, setCalc] = useState(0);
    const [position, setPosition] = useState('h');

    return {calc, setCalc, position, setPosition};
}
