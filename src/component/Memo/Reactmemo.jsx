import { useEffect, useMemo, useState } from "react"
import Count from './Memocount';
export const Reactmemo = () => {
    const [count, setCount] = useState(0);
    // let data = {
    //     name: "jkp",
    //     age: 30
    // }
    let data = useMemo(() => {
        return {
            name: "jkp",
            age: 30
        }
    }, [])
    const [name, setName] = useState()

    let handleNameChange = () => {
        setName("JJ");
    }
    return (<>

        <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>&nbsp;
            <h1>{count}</h1>
        </div>
        <div style={{ padding: 10 }}>
            <p>
                If you are passing object and it is not changing.
                Thrn use "useMemo".
            </p>
            <p>
                If you are passing sinle string then dont use "useMemo" but use "Memo" at Child level
                to avoid re-render
            </p>
        </div>
        <br />
        Below is count component:
        <Count bioData={data}>
        </Count>
    </>)
}

