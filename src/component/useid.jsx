import { useId } from "react";
import { useBioContext } from "./ContextAPI/index";
export const Useidexample = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
    };
    var id = useId();
    const { name, age } = useBioContext();
    return (<>
        <h1>Login</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {name} is {age} years old.
            <div>
                <label htmlFor={id + "usernameId"}>Username : </label>
                <input type="text" id={id + "usernameId"} name="username" />
            </div>

            <div>
                <label htmlFor={id + "passwordId"}>Password : </label>
                <input type="text" id={id + "passwordId"} name="password" />
            </div>

            <button type="submit" onClick={handleSignIn} style={{ width: 180 }}>Sign In</button>

        </form>
    </>)
}