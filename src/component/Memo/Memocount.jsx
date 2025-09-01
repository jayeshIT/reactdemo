import { useRef } from "react";
import React from 'react';
const Count = (props) => {
    const renderCount = useRef(0);
    return (<>
        <p>
            Nothing changes but I have rendered  :
            <span>{renderCount.current++}</span>
        </p>
        <p>{props.name}</p>
    </>)
}

export default React.memo(Count);