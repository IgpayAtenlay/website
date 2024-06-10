import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddButton(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    props.defaultValue.id = v4();

    return <button onClick={() => {
        creature[props.variable].push(props.defaultValue);
        setCreature(prevCreature => ({
            ...prevCreature,
            [props.variable]: prevCreature[props.variable]
            }));
      }}>+</button>;
}



