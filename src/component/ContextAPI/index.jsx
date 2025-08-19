import React from 'react'
export const BioContext = React.createContext();
export const BioProvider = ({ children }) => {
    return (<>
        <BioContext.Provider value={{ name: "John Doe", age: 30 }}>
            {/* Children components will go here */}
            {children}
        </BioContext.Provider>
    </>)
}