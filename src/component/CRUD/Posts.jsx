import { useEffect, useState } from "react";
import { getPost } from "../services/PostApi";
export const Posts = () => {
    const [data, setData] = useState([]);
    const getPostData = async () => {
        try {
            var res = await getPost();
            console.log(res);

            console.log(res.data.length);
            setData(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getPostData();
    }, [])


    return (<>


        <section>
            <div className="container">
                <h1>Posts</h1>
                <div style={{ padding: 10 }}>
                    <input type="text" placeholder="Add Title">
                    </input>
                    <input type="text" placeholder="Add Subtitle">
                    </input>
                    <button className="button1">Add</button>
                </div>
                <div className="grid-container">
                    {
                        data.map((curentEle) => {
                            return (<>
                                <div className="grid-item" key={curentEle.id}>
                                    <div className="grid-title">
                                        {curentEle.title.substr(0, 20)}
                                    </div>
                                    <div className="grid-desc">
                                        {curentEle.body}
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "left", marginTop: 10 }}>
                                        <button className="button1" >Edit</button> &nbsp;
                                        <button className="button1">Delete</button>
                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>

            </div>
        </section>
    </>)
}