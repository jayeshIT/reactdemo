import { useReducer } from "react";
export const Usereducercomp = () => {

    var initialState = {
        count: Number(0),
        inc: 2,
        dec: 2
    }
    const reducer = (state, action) => {

        switch (action.type) {
            case "inc":
                return { ...state, count: Number(state.count + state.inc) }

            case "dec":
                return { ...state, count: Number(state.count - state.dec) }
            case "reset":
                return { count: Number(0) }
            case "default":
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    //const count = 0;
    return (<>
        <br />
        <br />
        Count : {state.count} <br /><br />
        <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
        <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>)
}