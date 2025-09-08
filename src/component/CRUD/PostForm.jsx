import { Form } from "react-router-dom"
import { useEffect, useState } from "react";
import { postData, upateData } from "../services/PostApi";
export const PostForm = ({ data, setData, updateDataApi, setUpdateDataApi }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    const isEmpty = Object.keys(updateDataApi).length === 0;
    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || ""
        })
    }, [updateDataApi]);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev) => {
            return { ...prev, [name]: value }
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        var action = e.nativeEvent.submitter.value;
        if (action == "Edit") {
            const res = await upateData(updateDataApi.id, addData);
            if (res.status == 200) {
                console.log("RES : " + res.status);
                console.log("RES ID : " + res.id);
                setData((prev) => {
                    return prev.map((currentEle) => {
                        return currentEle.id === res.data.id ? res.data : currentEle
                    });
                });
                setAddData({
                    title: "",
                    body: ""
                });
                setUpdateDataApi({})

            }
        } else {
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

    }

    return (<>

        <Form onSubmit={handleFormSubmit} action="/">
            <div style={{ padding: 10, display: "flex", flexDirection: "row" }}>
                <label htmlFor="title">Title :</label>
                <input type="text" autoComplete="off" name="title" id="title" value={addData.title}
                    placeholder="Add Title" onChange={handleOnChange}>
                </input>
                <label htmlFor="body">Body: </label>
                <input type="text" name="body" autoComplete="off" id="body" value={addData.body}
                    placeholder="Add Body" onChange={handleOnChange}>
                </input>
                <button className="button1" type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
            </div>
        </Form>
    </>)
}
