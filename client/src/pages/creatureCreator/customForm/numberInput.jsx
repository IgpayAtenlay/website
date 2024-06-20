import "../../../css/creatureCreator/numberInput.css";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function NumberInput(props) {
    var {setCreature} = useContext(CreatureContext);
    var name = props.name;
    var location = props.location;
    var factor = 1;
    if (props.factor) {
        factor = props.factor;
    }
    var id = v4();

    function handleChangeSet(e) {
        var value = e.target.value
        if (!isNaN(value)) {
            if (value !== "") {
                value = parseInt(value);
            }
        }
        location[name] = value;
        setCreature(prevCreature => ({
            ...prevCreature,
            name: prevCreature.name
            }));
    }

    return (<div className="numberInput">
        <label for={id}>{props.label}</label>
        <input type="number" value={location[name]} onChange={handleChangeSet} id={id} step={factor} style={{width: (location[name].toString().length / 2 + 1.5) + "em"}}/>
    </div>)
}