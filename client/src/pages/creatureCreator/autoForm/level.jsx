import {useContext} from 'react';
import {CreatureContext} from "../index";
import { updateAbilities } from './updaters/updateAbilities';
import { updateSkills } from './updaters/updateSkills';

export default function Level() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {

        // update level
        var level = parseInt(e.target.value);

        if (level >= -1 && level <= 24) {

            // update abilties

            var abilities = updateAbilities(creature.abilities, level);

            // update skills

            var skills = updateSkills(creature.skills, level, abilities);
        }

        setCreature(prevCreature => ({
            ...prevCreature,
            level: level,
            abilities: abilities,
            skills: skills
        }));
    }

    return (
        <input value={creature.level} onChange={handleChange} type="number" />
    )
}