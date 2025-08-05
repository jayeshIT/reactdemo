import { forwardRef, useId, useRef } from "react"

export const Forwardref = () => {
    var username = useRef(null);
    var password = useRef(null);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(username.current.value);
    }
    return (<>
        <form onSubmit={handleOnSubmit}>
            <Beforerect19 ref={username} label="username"></Beforerect19>
            <Beforerect19 ref={password} label="password"></Beforerect19>
            <button type="submit">Submit</button>
        </form>
    </>);
}

const Beforerect19 = forwardRef((props, ref) => {
    const id = useId()
    return (<>
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref}></input>
        </div>
    </>);
});