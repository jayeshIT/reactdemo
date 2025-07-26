export const Inputsetupcomponent = (props) => {
    const handleChange = (event) => {
        props.setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            placeholder="Enter value"
        />
    );
}