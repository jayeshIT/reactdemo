import React, { useState } from 'react';
import { Displaycomponent } from './Displaycomponent';
import { Inputsetupcomponent } from './Inputsetupcomponent';
export const Liftupcomponent = ({ props }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <h1>Lift Up Component</h1>
            <div style={{ border: "1px solid teal", marginTop: "20px" }}>
                <h3>Below are two child Component</h3>
                <Inputsetupcomponent setInputValue={setInputValue} />
                <Displaycomponent props={{ inputvalue: inputValue }} />
            </div>
        </>
    );
}