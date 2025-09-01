import React from 'react';
import {createContext, useContext}from 'react';
export const BioContext = createContext();
export const BioProvider = ({ children }) => {
    return (<>
        <BioContext.Provider value={{ name: "John Doe", age: 30 }}>
            {/* Children components will go here */}
            {children}
        </BioContext.Provider>
    </>)
}

export const useBioContext = () =>{
    const context = useContext(BioContext);
    return context;
}