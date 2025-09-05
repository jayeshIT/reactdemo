import { useEffect, useState } from "react";
import { deletePost, getPost } from "../services/PostApi";
import "../fetchapi.css";
import { PostForm } from "./PostForm";
export const Posts = () => {
    const [data, setData] = useState([]);
    const getPostData = async () => {
        try {
            var res = await getPost();
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getPostData();
    }, [])

    const handleDeletePost = async (id) => {
        try {
            var res = await deletePost(id);
            if (res.status == 200) {
                const newUpdatedPosts = data.filter((e) => e.id !== id);
                setData(newUpdatedPosts);
            }
        } catch (error) {
        }
    }
    return (<>
        <section>
            <div className="container">
                <h1>Posts</h1>
                <PostForm data={data} setData={setData}></PostForm>
                <div className="grid-container">
                    {
                        data.map((curentEle) => {
                            return (
                                <div className="grid-item" key={curentEle.id}>
                                    <div className="grid-title">
                                        {curentEle.title.substr(0, 20)}
                                    </div>
                                    <div className="grid-desc">
                                        {curentEle.body}
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "left", marginTop: 10 }}>
                                        <button className="button1">Edit</button> &nbsp;
                                        <button className="button1" onClick={() => handleDeletePost(curentEle.id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    </>)
}