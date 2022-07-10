import React, {useContext, useState} from 'react'

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){
    const [state, setNewState] = useState({
        openModal:false
    })
    
    return(
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    ) 
}