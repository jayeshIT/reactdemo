import { useRef } from "react";
import { Forwardref } from './forwardref';
export default function Refexample() {

    const username = useRef(null);
    const password = useRef(null);
    const handleSignIn = (e) => {
        e.preventDefault();
        alert('UserName=' + username.current.value + '&Passwprd=' + password.current.value)
    };
    return (<>

        <div >
            <h2>Login</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required ref={username}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    ref={password}

                />

                <div className="login-form-actions">
                    <button type="submit" onClick={handleSignIn}>Sign In</button>
                </div>

            </form>
            <br />
            <Forwardref></Forwardref>
        </div>
    </>);
}