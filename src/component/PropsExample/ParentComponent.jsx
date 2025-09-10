import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const [name, setName] = useState("Sachin");
    const changeName = () => {
        setName("Cricketers name");
    }
    return (<>
        I am ParentComponent
        <br />
        <ChildComponent fname={name} changename={changeName}></ChildComponent>
    </>)
}