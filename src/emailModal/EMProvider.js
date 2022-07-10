import React, {useContext, useState} from 'react'

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){
    
    // FUNCTIONS
    // create functions for state
    const openModalAction = () => {
        setNewState({
            // get the object and change only openModal
            ...state, openModal:true
        })
    }
    const closeModalAction = () => {
        setNewState({
            ...state, openModal:false
        })
    }


    // STATE
    const [state, setNewState] = useState({
        openModal:false,
        openModalAction,
        closeModalAction
    })
    
    return(
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    ) 
}