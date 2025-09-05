import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const Movies = () => {
    const [data, setData] = useState([]);
    var API = "http://www.omdbapi.com/?i=tt3896198&apikey=c71576d&s=troy&page=1";
    const getMoviesData = async () => {

        try {
            var res = await axios.get(API)
            console.log(res);
            setData(res.data.Search);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMoviesData();
    }, [])
    return (<>
        <div className="container">
            <div className="card-demo2">
                {data.map((curElement) => {
                    return <Cards moviesData={curElement} key={curElement.imdbID}></Cards>

                })}
            </div>
        </div>

    </>)
}