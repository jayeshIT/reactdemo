import React, { useState } from 'react';
import { Displaycomponent } from './Displaycomponent';
import { Inputsetupcomponent } from './Inputsetupcomponent';
export const Liftupcomponent = ({ props }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div style={{ border: "1px solid teal", marginTop: 20 }}>
            <h1>Lift Up Component</h1>
            <div style={{ marginTop: 20, padding: 20 }}>
                <h3>Below are two child Component</h3>
                <Inputsetupcomponent setInputValue={setInputValue} />
                <Displaycomponent props={{ inputvalue: inputValue }} />
            </div>
        </div>
    );
}