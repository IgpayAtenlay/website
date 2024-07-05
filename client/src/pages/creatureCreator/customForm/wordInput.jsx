import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function WordInput(props) {
    // need props.variable
    // need props.label
    // need props.id
    var variable = props.variable;

    var {creature, setCreature} = useContext(CreatureContext);
    var value = creature[variable].find(a => a.id === props.id)[props.label];

    function handleChange(e) {
        var index = creature[variable].findIndex(a => a.id === e.target.id);
        var value = e.target.value.toLowerCase();
        
        setCreature(prevCreature => ({
            ...prevCreature,
            [variable]: prevCreature[variable].with(index, 
                {
                    ...prevCreature[variable][index],
                    [props.label]: value
                }
            )
        }));
    }

    return (
        <input id={props.id} value={value} onChange={handleChange}/>
    )
}