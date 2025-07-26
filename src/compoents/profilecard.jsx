export default function Profilecard(props) {
    const handleClick = (event) => {
        console.log(event)
        alert('1234');
    }
    const handlelocalclick = () => {
        props.onClick();
    }
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px', display: 'flex', flexDirection : 'column', textAlign: 'left'}}>
            <h5>Profile Card</h5>
            <button onClick={handleClick}>click me</button>
            <button onClick={(event) => handleClick(event)}>click me</button>
            <p>{props.conf}</p>
            <p>{props.name}</p>
            <p>{props.language}</p>
            <div>{props.bio}</div>
            <div style={{display: 'flex', flexDirection : 'row'}}>
                <button onClick={props.onClick}>welcom user</button>
                <button onMouseEnter={props.onMouseEnter}>enter mouse</button>
                <button onClick={()=> handlelocalclick()}>call from local</button>
                </div>
            <div style={{color : 'red' , fontSize :8}}>{props.children}</div>
        </div>
    );
}