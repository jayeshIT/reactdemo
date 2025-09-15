import { useState } from "react";
import { Accordian } from "./Accordian";
import Toggleswitch from "../../../src/projects/ToggleSwitch/ToggleSwitch";
import { Footer2 } from "./Footer2";
export const Parent = () => {
    const [selectui, setSelectUI] = useState("accordian")
    const changeUI = (text) => {
        setSelectUI(text)
    }
    return (<>
        Please select UI you want to check;
        <div style={{ display: "flex", flexDirection: "row", gap: 5, marginBottom: 20 }}>
            <button onClick={() => changeUI('Accordian')}>Accordian</button>
            <button onClick={() => changeUI('Switch')}>Switch</button>
            <button onClick={() => changeUI('Footer')}>Footer</button>
        </div>
        <div>
            {selectui === "Accordian" && <Accordian></Accordian>}
            {selectui === "Switch" && <Toggleswitch></Toggleswitch>}
            {selectui === "Footer" && <Footer2></Footer2>}
        </div>

    </>)
}   