import {useContext} from 'react';
import {CreatureContext} from "../../index";

export default function WordInput(props) {
    // need props.label
    // need props.id

    var {creature, setCreature} = useContext(CreatureContext);
    var value = creature.weapons.find(a => a.id === props.id)[props.label];

    function handleChange(e) {
        var weaponIndex = creature.weapons.findIndex(a => a.id === e.target.id);
        
        setCreature(prevCreature => ({
            ...prevCreature,
            weapons: prevCreature.weapons.with(weaponIndex, 
                {
                    ...prevCreature.weapons[weaponIndex],
                    [props.label]: e.target.value
                }
            )
        }));
    }

    return (
        <input id={props.id} value={value} onChange={handleChange}/>
    )
}