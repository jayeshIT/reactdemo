import { useReducer } from "react";
export const Usereducercomp = () => {

    var initialState = {
        count: 0
    }
    const reducer = (state, action) => {

        switch (action.type) {
            case "inc":
                return { count: state.count + 1 }

            case "dec":
                return { count: state.count - 1 }
            case "reset":
                return { count: 0 }
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