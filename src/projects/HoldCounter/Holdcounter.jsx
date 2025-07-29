import { useEffect, useState } from "react";
function Holdcounter() {
    const [count, setCount] = useState(0);
    const [updatedate, setUpdateddate] = useState();
    const [inputvalue, setInputvalue] = useState();
    const handleChange = (e) => {
        setInputvalue(e.target.value);
    };

    useEffect(() => {
        document.title = `Count: ${count}`;
        var datetimer = setInterval(() => {
            setUpdateddate(new Date().toLocaleTimeString());
        }, 1000);
        var ct = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(ct);
            clearInterval(datetimer);
        };
    }, [inputvalue, count]);
    return (
        <div className="App">
            <h1>use effect challenge</h1>
            <p>{count}</p>
            current Time {updatedate}
            <p>Input Value: {inputvalue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <input
                type="text"
                placeholder="type here"
                value={inputvalue}
                onChange={handleChange}
            />
        </div>
    );
}

export default Holdcounter;