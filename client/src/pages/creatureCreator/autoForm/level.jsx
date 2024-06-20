import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function Level() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        setCreature(prevCreature => ({
            ...prevCreature,
            level: parseInt(e.target.value)
        }));
    }

    return (
        <input value={creature.level} onChange={handleChange} type="number" />
    )
}