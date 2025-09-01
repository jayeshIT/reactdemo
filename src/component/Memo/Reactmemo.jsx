import { useEffect, useState } from "react"
import Count from './Memocount';
export const Reactmemo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Hatesh")

    let handleNameChange = () => {
        setName("JJ");
    }
    return (<>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        Below is count component:
        <button onClick={handleNameChange}>Change Name</button>
        {name}
        <Count name={name}>
        </Count>
    </>)
}