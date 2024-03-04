import { createContext, useState } from "react"


 export const Valcontext = createContext()

export default function AuthContextProvider({children}){

    const [isAuth, setisAuth] = useState(false)
    return(
        <>
        <Valcontext.Provider value={{}}>
        {children}

        </Valcontext.Provider>
        </>
    )
}