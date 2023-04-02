import React, { createContext } from "react";


const UserContext = createContext()

const Wrapper = (props) => {
    const [greeting, setGreeting] = useState("Hello");
    const changeGreeting = (e) => {
        setGreeting(e);
    }
  
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }