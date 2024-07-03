import {useContext} from 'react';
import {CreatureContext} from "../../index";

export default function Range(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    var range = creature.weapons.find(a => a.id === props.id).range;

    function handleChange(e) {
        var weaponIndex = creature.weapons.findIndex(a => a.id === e.target.id);
        
        setCreature(prevCreature => ({
            ...prevCreature,
            weapons: prevCreature.weapons.with(weaponIndex, 
                {
                    ...prevCreature.weapons[weaponIndex],
                    range: e.target.value
                }
            )
        }));
    }

    return (
        <select id={props.id} value={range} onChange={handleChange}>
            <option value="melee">Melee</option>
            <option value="ranged">Ranged</option>
        </select>
    );
}