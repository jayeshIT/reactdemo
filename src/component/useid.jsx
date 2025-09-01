import { useId } from "react";
import { useBioContext } from "./ContextAPI/index";
export const Useidexample = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
    };
    var id = useId();
    const { name, age } = useBioContext();
    return (<>
        <h2>Login</h2>
        <form >
            {name} is {age} years old.
            <div>
                <label htmlFor={id + "usernameId"}>username</label>
                <input type="text" id={id + "usernameId"} name="username" />
            </div>

            <div>
                <label htmlFor={id + "passwordId"}>password</label>
                <input type="text" id={id + "passwordId"} name="password" />
            </div>

            <div>
                <label htmlFor={id + "emailId"}>email</label>
                <input type="text" id={id + "emailId"} name="email" />
            </div>

            <button type="submit" onClick={handleSignIn}>Sign In</button>

        </form>
    </>)
}