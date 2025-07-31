export default function Profilecard(props) {
  const handlelocalclick = () => {
    props.onClick();
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        borderRadius: 5,
      }}
    >
      <h5>Profile Card of {props.name}</h5>
      <div>Name:{props.name}</div>
      <div>Language:{props.language}</div>
      <div>Bio:{props.bio}</div>
      <div style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <button onClick={props.onClick}>welcom user</button>
        <button onMouseEnter={props.onMouseEnter}>enter mouse</button>
        <button onClick={() => handlelocalclick()}>call from local</button>
      </div>
      <div style={{ color: "red", fontSize: 8 }}>{props.children}</div>
    </div>
  );
}
