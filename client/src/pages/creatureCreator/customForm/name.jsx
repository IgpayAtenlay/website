import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function Name() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        setCreature(prevCreature => ({
            ...prevCreature,
            name: e.target.value.toLowerCase()
        }));
    }

    return (
        <input 
            className="name" 
            value={creature.name.toUpperCase()}
            onChange={handleChange}
            style={{width: creature.name.length * 10 + 5}}
        ></input>
    );
}