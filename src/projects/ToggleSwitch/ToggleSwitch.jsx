import { useState } from "react";
import "./ToggleSwitch.css";
export default function Toggleswitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };
    return (
        <>
            <div
                style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
                className="toggle-switch"
                onClick={handleToggleSwitch}
            >
                <div className={isOn ? "switch on" : "switch off"}>
                    <span className="switch-state">{isOn ? "On" : "Off"}</span>
                </div>
            </div>
        </>
    );
}
