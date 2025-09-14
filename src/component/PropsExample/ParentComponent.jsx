import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const [person, setPerson] = useState({
        name: "Sachin",
        age: "30"
    });
    console.log("usest :" + useState);
    const changeName = () => {
        setPerson((prev) => {
            console.log(prev);
            return {
                name: "John",
                age: "40"
            }
        });
    }
    const changeage = (value) => {
        setPerson((prev) => {
            console.log(prev);
            return { ...prev, age: '45' }
        });
    }
    return (<>
        I am ParentComponent {person.name} and {person.age}
        <br />
        <button onClick={(e) => changeage('jayesh')}>Change Age </button>
        <br />
        <ChildComponent fname={person.name} changename={changeName}></ChildComponent>
    </>)
}