import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { getMoviesList } from "././services/getservice";
export const Movies = () => {
    const [data, setData] = useState([]);

    const getMoviesData = async () => {

        try {
            var res = await getMoviesList();
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