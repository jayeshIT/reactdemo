export const Cards = ({ moviesData }) => {
    console.log(moviesData)
    return (<>
        <div style={{ display: 'flex', flexDirection: "column", border: "1px solid grey", justifyContent: "center", margin: "0 auto", padding: 10 }}>
            <h1>{moviesData.Title}</h1>
            <img src={moviesData.Poster} alt="image" style={{ height: 400, width: 300 }}></img>
        </div>
    </>)
}