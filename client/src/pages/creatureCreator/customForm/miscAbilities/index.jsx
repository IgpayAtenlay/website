import AddButton from "../addButton";
import DeleteButton from "../deleteButton";
import WordInput from "../wordInput";
import Description from "./description";

export default function MiscAbilities(props) {
    var other = [];
    props.other.forEach(e => {
        other = other.concat(
        <div>
            <WordInput variable={"miscAbilities"} label={"name"} id={e.id} />
            <input type="checkbox" />
            <Description id={e.id} />
            <DeleteButton id={e.id} variable="miscAbilities" />
        </div>);
    });

    return (
        <div>
            {other}
            <AddButton 
                variable={"miscAbilities"}
                defaultValue={{
                    name: "name",
                    description: "description"
                }}
            />
        </div>
    );
}