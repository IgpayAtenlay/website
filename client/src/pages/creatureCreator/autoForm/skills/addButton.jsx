import { useContext } from 'react';
import { CreatureContext } from "../../index";
import { allSkills } from "../../variables";
import updateSkills from "../updaters/updateSkills";
import { v4 } from "uuid";
import highestAbility from "../updaters/highestAbility";
import sortSkills from "../updaters/sortSkills";

export default function AddButton() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        
        // default new skill is Lore Lore

        var name = "lore"

        // add a skill that you don't have that matches one of your highest abilities

        var highestAbilities = highestAbility(creature.abilities);

        Object.entries(allSkills).forEach(([skill, ability]) => {
            if (skill !== "lore" && highestAbilities.includes(ability) && !creature.skills.some(e => e.name === skill)) {
                name = skill;
                return;
            }
        });

        // if none exsist, add any skill you don't have

        if (name === "lore") {
            Object.keys(allSkills).forEach((skill) => {
                if (skill !== "lore" && !creature.skills.some(e => e.name === skill)) {
                    name = skill;
                    return;
                }
            });
        }
        
        var newSkill = {
            name: name,
            scale: "auto",
            modifier: 0,
            id: v4()
        }

        // update and sort skills

        var skills = updateSkills(creature.skills.concat(newSkill), creature.level, creature.abilities);
        skills = sortSkills(skills);

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
            }));
    }
    

    return <button onClick={handleChange}>+</button>;
}