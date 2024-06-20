import {useContext} from 'react';
import {CreatureContext} from "../index";
import { skillModifiers } from '../variables';

export default function Level() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {

        // update level
        var level = parseInt(e.target.value);

        // update skills
        var skills = creature.skills;

        if (level >= -1 && level <= 24) {
            skills.forEach((skill, index) => {
                if (skill.scale !== "auto") {
                    var value = skillModifiers[skill.scale][level + 1];
                    skills = skills.with(index, {
                        ...skills[index],
                        value: value
                    })
                }
            });
        }

        setCreature(prevCreature => ({
            ...prevCreature,
            level: level,
            skills: skills
        }));
    }

    return (
        <input value={creature.level} onChange={handleChange} type="number" />
    )
}