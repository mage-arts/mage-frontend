'use client'
import {createContext, useContext, useState} from 'react'

export const StateContext = createContext(null)

export const ContextProvider = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <StateContext.Provider
        value={{
            showMenu,
            setShowMenu
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)