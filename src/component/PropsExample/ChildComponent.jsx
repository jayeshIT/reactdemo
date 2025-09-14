export const ChildComponent = ({ fname, changename }) => {
    return (<div style={{ padding: 10 }}>
        I am child <br />
        {fname}
        <button onClick={changename}>Change Person</button>
    </div>)
}