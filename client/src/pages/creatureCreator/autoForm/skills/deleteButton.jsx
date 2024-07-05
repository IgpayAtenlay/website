import { useContext } from 'react';
import { CreatureContext } from "../../index";
import updateSkills from '../updaters/updateSkills';

export default function DeleteButton(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var skills = creature.skills.filter(a => a.id !== e.target.id);

        skills = updateSkills(skills, creature.level, creature.abilities);

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    return(<button id={props.id} onClick={handleChange}>-</button>)
}