import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function DeleteButton(props) {
    // need props.variable
    // need props.id
    
    var {setCreature} = useContext(CreatureContext);

    return <button onClick={() => {
        setCreature(prevCreature => ({
            ...prevCreature,
            [props.variable]: prevCreature[props.variable].filter(e => e.id !== props.id)
            }));
      }}>-</button>;
}



