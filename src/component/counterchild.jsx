export const Counterchild = ({ count }) => {
    console.log("Counterchild Rendered with count:");
    return (
        <>
            <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
                <h2>Counter Value: {count}</h2>
            </div>
        </>
    );
}