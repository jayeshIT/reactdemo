import { useRef } from "react";
import React from 'react';
const Count = (props) => {
    const renderCount = useRef(0);
    return (<>
        <div style={{ padding: 10 }}>
            <p>
                Nothing changes but I have rendered  : <span>{renderCount.current++}</span>
            </p>
            <p>I am in child : {props.bioData.name}</p>
        </div>
    </>)
}

export default React.memo(Count);