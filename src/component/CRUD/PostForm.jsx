import { Form } from "react-router-dom"
import { useEffect, useState } from "react";
import { postData } from "../services/PostApi";
export const PostForm = ({ data, setData }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev) => {
            console.log(prev);
            return { ...prev, [name]: value }
        });
    };

    const handleFormSubmit = async (e) => {

        e.preventDefault();
        const res = await postData(addData);
        console.log("RES : " + res.status)
        if (res.status == 201) {
            setData([...data, res.data]);
            setAddData({
                title: "",
                body: ""
            })
        }
    }

    return (<>

        <Form onSubmit={handleFormSubmit} action="/">
            <div style={{ padding: 10, display: "flex", flexDirection: "row" }}>
                <label htmlFor="title">Title :</label>
                <input type="text" autoComplete="off" name="title" id="title"
                    placeholder="Add Title" onChange={handleOnChange}>
                </input>
                <label htmlFor="body">Body: </label>
                <input type="text" name="body" autoComplete="off" id="body"
                    placeholder="Add Body" onChange={handleOnChange}>
                </input>
                <button className="button1" type="submit">Add</button>
            </div>
        </Form>
    </>)
}
