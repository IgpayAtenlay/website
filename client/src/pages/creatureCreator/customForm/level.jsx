import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function Level() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {

        if (e.target.value === "") {
            setCreature(prevCreature => ({
                ...prevCreature,
                level: ""
            }))
        } else {
            setCreature(prevCreature => ({
                ...prevCreature,
                level: parseInt(e.target.value)
            }))
        }
    }

    return (
        <input value={creature.level} onChange={handleChange} type="number" />
    )
}