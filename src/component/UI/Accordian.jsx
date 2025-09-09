import { useEffect, useState } from 'react';
import './Accordian.css';
import { FAQ } from "./Faq";

export const Accordian = () => {
    //const [data, setData] = useState(questions);
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);
    useEffect(() => {
        setData(FAQ);
    })
    const handleClickButton = () => {
        setActiveId(!activeId);
    }
    return (
        <>
            <div>
                <h1>The Accordain </h1>
                <ul className='section-accordian'>
                    {
                        data.map((curElem) => {
                            return <li key={curElem.id}>
                                <div className='accordian-grid'>
                                    <p>{curElem.question}</p>

                                    <button onClick={handleClickButton}>{activeId ? "Hide" : "Show"}</button>

                                </div>
                                <p className='answers'>{activeId && curElem.answer}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
