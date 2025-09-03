import { useMemo, useState } from "react"
const Expensivecomponent = () => {
    const sum = () => {
        let i = 0;
        for (i = 0; i <= 100000; i++) {
            i = i + 1;
        }
        return i;
    }
    //const total = sum();
    const total = useMemo(() => sum(), []);

    return (<>
        <p>Sum : {total}</p>

    </>)
}


export const Usememo = () => {
    const [count, setCount] = useState(0);
    return (<>
        <Expensivecomponent></Expensivecomponent>
        <button onClick={() => setCount((prev) => prev + 1)}>Re-rencer Parent</button>
        <p>Parent re-rendered : {count}</p>
    </>)
}


