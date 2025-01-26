import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    
    const username = "Apoorv" 
  return (
    <div>
        <DataContext.Provider value={username}>
                <h1>{children}</h1>
        </DataContext.Provider>
    </div>
  )
}

export default UserContext
