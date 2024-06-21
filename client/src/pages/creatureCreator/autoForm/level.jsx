import {useContext} from 'react';
import {CreatureContext} from "../index";
import updateAbilities from './updaters/updateAbilities';
import updateSkills from './updaters/updateSkills';
import updatePerception from './updaters/updatePerception';

export default function Level() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {

        if (e.target.value === "") {
            setCreature(prevCreature => ({
                ...prevCreature,
                level: ""
            }));
        } else {
            
            var level = parseInt(e.target.value);
            
            // update level

            if (level < -1) {
                level = -1;
            } else if (level > 24) {
                level = 24;
            }
    
            // update abilties
    
            var abilities = updateAbilities(creature.abilities, level);
    
            // update perception
    
            var perception = updatePerception(creature.perception, level, abilities.wis);
    
            // update skills
    
            var skills = updateSkills(creature.skills, level, abilities);
    
            setCreature(prevCreature => ({
                ...prevCreature,
                level: level,
                abilities: abilities,
                perception: perception,
                skills: skills
            }));
        }
    }

    return (
        <input type="number" value={creature.level} onChange={handleChange} />
    )
}