import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddButton(props) {
    var {setCreature} = useContext(CreatureContext);
    props.defaultValue.id = v4();

    return <button onClick={() => {
        setCreature(prevCreature => ({
            ...prevCreature,
            [props.variable]: prevCreature[props.variable].concat(props.defaultValue)
            }));
      }}>+</button>;
}



