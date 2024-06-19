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

    function handleChangeUp(e) {
        var value = location[name]
        if (!isNaN(value)) {
            if (value === "") {
                value = factor;
            } else {
                value = parseInt(value);
                value = Math.floor(value / factor) * factor + factor;
            }
            location[name] = value;
            setCreature(prevCreature => ({
                ...prevCreature,
                name: prevCreature.name
                }));
        }
    }

    function handleChangeDown(e) {
        var value = location[name]
        if (!isNaN(value)) {
            if (value === "") {
                value = 0 - factor;
            } else {
                value = parseInt(value);
                value = Math.ceil(value / factor) * factor - factor;
            }
            location[name] = value;
            setCreature(prevCreature => ({
                ...prevCreature,
                name: prevCreature.name
                }));
        }
    }

    return (<div className="numberInput">
        <label for={id}>{props.label}</label>
        <input value={location[name]} onChange={handleChangeSet} id={id}/>
        <button className="up" onClick={handleChangeUp}>^</button>
        <button className="down" onClick={handleChangeDown}>v</button>
    </div>)
}