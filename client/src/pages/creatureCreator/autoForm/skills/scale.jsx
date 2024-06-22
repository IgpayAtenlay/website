import { useContext } from 'react';
import { CreatureContext } from "../../index";
import updateSkills from "../updaters/updateSkills";

export default function Scale(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var scale = e.target.value;
        var index = creature.skills.findIndex(a => a.id === e.target.id);

        var skills = creature.skills.with(index, {
            ...creature.skills[index],
            scale: scale
        });

        skills = updateSkills(skills, creature.level, creature.abilities);
        
        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    return (
        <select id={props.id} value={props.scale} onChange={handleChange}>
            <option value="auto">Auto</option>
            <option value="manual">Manual</option>
            <option value="extreme">Extreme</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
            <option value="veryLow">Very Low</option>
        </select>
    );
}