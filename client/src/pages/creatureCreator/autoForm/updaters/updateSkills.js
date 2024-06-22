import { skillModifiers, allSkills } from "../../variables";
import highestAbility from "./highestAbility";

export default function updateSkills(creatureSkills, level, abilities) {
    
    // count how many skills are high scale
    
    var numOfHighRegular = creatureSkills.reduce((total, skill) => {
        if (!skill.name.includes("lore")) {
            if (skill.scale === "high" || skill.scale === "extreme") {
                return total + 1;
            } else if (skill.scale === "manual" && skill.modifier >= skillModifiers.high[level + 1]) {
                return total + 1;
            }
        }
        return total;
    }, 0);

    // change skills

    creatureSkills = creatureSkills.map(skill => {
        if (skill.scale === "auto") {
            if (numOfHighRegular < 1 && !skill.name.includes("lore")) {
                var highestAbilities = highestAbility(abilities);

                if (skill.name in allSkills && highestAbilities.includes(allSkills[skill.name])) {
                    
                    // if it matches your highest ability make it high

                    numOfHighRegular++;
                    return {
                        ...skill,
                        modifier: skillModifiers.high[level + 1]
                    }
                } else {

                    // if it doesn't match your highest ability make it moderate

                    return {
                        ...skill,
                        modifier: skillModifiers.moderate[level + 1]
                    }
                }
                
            } else if (skill.name.includes("lore")) {

                // make lores high

                return {
                    ...skill,
                    modifier: skillModifiers.high[level + 1]
                }
            } else {

                // everything else gets moderate

                return {
                    ...skill,
                    modifier: skillModifiers.moderate[level + 1]
                }
            }
        } else if (skill.scale === "manual") {
            return skill;
        } else {
            return {
                ...skill,
                modifier: skillModifiers[skill.scale][level + 1]
            }
        }
    });

    // if you still don't have a high skill, make any normal skill high

    creatureSkills = creatureSkills.map(skill => {
        if (skill.scale === "auto") {
            if (numOfHighRegular < 1 && !skill.name.includes("lore")) {
                numOfHighRegular++;
                return {
                    ...skill,
                    modifier: skillModifiers.high[level + 1]
                }
            }
        }
        return skill;
    });

    return creatureSkills;
}