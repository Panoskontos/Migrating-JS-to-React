import React, {useContext, useState} from 'react'
import Cookies from "js-cookie";


export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function EMProvider({children}){

    // FUNCTIONS
    
    // create functions for state
    const openModalAction = () => {       
        // set cookie
        Cookies.set('my_modal_was_opened', true, { expires: 7 })

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
        closeModalAction,
    })

    // Seperate EmailHook state and hook
    const [ email, setEmail ] = useState('')
    const getEmail =(e) =>{
            setEmail(e.target.value)
    }
    
    return(
        <StateContext.Provider value={{state,email,getEmail}}>
            {children}
        </StateContext.Provider>
    ) 
}