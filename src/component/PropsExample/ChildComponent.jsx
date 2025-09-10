export const ChildComponent = ({ fname, changename }) => {
    return (<>
        I am child <br />
        {fname}
        <button onClick={changename}>Change Name</button>
    </>)
}