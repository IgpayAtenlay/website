import {useContext} from 'react';
import {CreatureContext} from "../index";
import updatePerception from "./updaters/updatePerception";
import { v4 } from 'uuid';

export default function Perception(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    var id = v4();

    function handleChange(e) {
        var scale = e.target.value;
        
        var perception = {
            ...creature.perception,
            scale: scale
        }

        perception = updatePerception(perception, creature.level, creature.abilities.wis);
        
        setCreature(prevCreature => ({
            ...prevCreature,
            perception: perception
        }));
    }

    return (
        <span>
            <label for={id}><b>Perception </b></label>
            <select id={id} value={creature.perception.scale} onChange={handleChange}>
                <option value="auto">Auto</option>
                <option value="extreme">Extreme</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
                <option value="veryLow">Very Low</option>
            </select>
        </span>
    );
}