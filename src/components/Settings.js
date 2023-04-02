import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {
    const [state, setState] = useState("");

    // to be implemented in context
    const { changeGreeting } = useContext(UserContext);

    const handle = (e) => {
        e.preventDefault();
        changeGreeting(state);
    }

    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input type={'text'}
            onChange={(e) => {
                setState(e.target.value);
            }}
            onKeyUp={handle}
            />
        </div>
    )
}