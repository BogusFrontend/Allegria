import { useState, createContext } from "react";

export const CustomContext = createContext(null);

const Context = (props) => {
    const value = {};

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )

}
export default Context;