import Select from "../../../components/select";

export default function Archetype(props) {
    function handleSubmit(e) {
        e.preventDefault();
        var rawData = new FormData(e.target);
        var input = parseForm(rawData);
        props.parseData(input);
        props.nextPage("archetype");
    }

    return (
        <form method="POST" onSubmit={handleSubmit} aria-label="name">
            <label>Archetype</label>
            <Select name= "archetype" options={[
                "brute", 
                "class", 
                "magical striker", 
                "skill paragon",
                "skirmisher",
                "sniper",
                "soldier",
                "spellcaster"
            ]} />
            <input type="submit" />
        </form>
    );

}

function parseForm(formData) {
    var dataObject = Object.fromEntries(formData.entries());

    return {
        archetype: dataObject.archetype
    }
}