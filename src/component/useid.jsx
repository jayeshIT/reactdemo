import { useId } from "react";

export const Useidexample = () => {
    const handleSignIn = (e) => {
        e.preventDefault();
    };
    var id = useId();
    return (<>
        <h2>Login</h2>
        <form >
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