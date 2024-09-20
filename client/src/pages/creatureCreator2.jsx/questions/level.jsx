export default function Level(props) {
    function handleSubmit(e) {
        e.preventDefault();
        var rawData = new FormData(e.target);
        var input = parseForm(rawData);
        props.parseData(input);
        props.nextPage("name");
    }

    return (
        <form method="POST" onSubmit={handleSubmit} aria-label="name">
            <label>Level</label>
            <input type="number" name="level" />
            <input type="submit" />
        </form>
    );

}

function parseForm(formData) {
    var dataObject = Object.fromEntries(formData.entries());

    return {
        level: dataObject.level
    }
}