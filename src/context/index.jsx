import React, { createContext } from 'react'
import {useCarousel} from './useCarousel'

export const API_CONTEXT = createContext(null)

export const AsteriskProvider = ({children}) => {

    const {calc, setCalc, position, setPosition} = useCarousel()

    const context = {
        calc, 
        setCalc,
        position,
        setPosition
    }
    return (
        <API_CONTEXT.Provider value={context}>
            {children}
        </API_CONTEXT.Provider>
    )
}