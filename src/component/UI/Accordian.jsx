import { useEffect, useState } from 'react';
import './Accordian.css';
import { FAQ } from "./Faq";

export const Accordian = () => {
    //const [data, setData] = useState(questions);
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);
    useEffect(() => {
        setData(FAQ);
    },)


    const handleClickButton = (id) => {
        if (id == activeId) {
            setActiveId(false)
        } else {
            setActiveId(id);
        }

    }
    return (
        <div className="main-div">
            <h1>The Accordain </h1>
            <section>
                <ul className='section-accordian'>
                    {
                        data.map((curElem) => {
                            return <li key={curElem.id}>
                                <div className='accordian-grid'>
                                    <p>{curElem.question}</p>
                                    <button onClick={() => handleClickButton(curElem.id)}>{activeId == curElem.id ? "Hide" : "Show"}</button>
                                </div>
                                {(activeId == curElem.id && <div className='answers'>{curElem.answer}</div>
                                )}
                            </li>
                        })
                    }
                </ul>
            </section>
        </div>
    )
}
