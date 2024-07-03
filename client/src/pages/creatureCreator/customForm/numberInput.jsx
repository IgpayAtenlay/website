import "../../../css/creatureCreator/numberInput.css";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function NumberInput(props) {
    // need props.location
    // need props.label
    // can have props.factor

    var {setCreature} = useContext(CreatureContext);
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

        location.modifier = value;
        location.scale = "manual";

        setCreature(prevCreature => ({
            ...prevCreature,
            name: prevCreature.name
            }));
    }

    return (
        <span className="numberInput">
            <label htmlFor={id}>{props.label}</label>
            <input 
                type="number" 
                value={location.modifier} 
                onChange={handleChangeSet} 
                id={id} 
                step={factor} 
                style={{width: (location.modifier.toString().length / 2 + 1.5) + "em"}}
            />
        </span>
    );
}