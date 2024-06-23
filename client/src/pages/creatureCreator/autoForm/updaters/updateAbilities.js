import { abilityModifiers } from "../../variables";

export default function updateAbilities(abilities, level) {
    
    // update abilities with assigned scale
    
    Object.keys(abilities).forEach(e => {
        if (abilities[e].scale !== "auto" && abilities[e].scale !== "manual") {
            abilities = {
                ...abilities,
                [e]: {
                    ...abilities[e],
                    modifier: abilityModifiers[abilities[e].scale][level + 1]
                }
            }
        }
    });

    // update abilities set to auto

    abilities = updateAutoAbilities(abilities, level);

    return abilities;
}

function updateAutoAbilities(abilities, level) {
    var abilityModifiersArray = Object.values(abilities);
    
    // if there are items to autofill, do it

    if (abilityModifiersArray.some(e => e.scale === "auto")) {
        
        // count number of each scale category

        var numOfHigh = abilityModifiersArray.reduce((total, ability) => {
            if (ability.scale === "high" || ability.scale === "extreme") {
                return total + 1;
            } else if (ability.scale === "manual" && ability.modifier >= abilityModifiers.high[level + 1]) {
                return total + 1;
            }
            return total;
        }, 0);

        var numOfModerate = abilityModifiersArray.reduce((total, ability) => {
            if (ability.scale === "moderate") {
                return total + 1;
            } else if (ability.scale === "manual" && ability.modifier > abilityModifiers.low[level + 1] && ability.modifier < abilityModifiers.high[level + 1]) {
                return total + 1;
            }
            return total;
        }, 0);

        // assign modifiers to auto

        Object.keys(abilities).forEach(e => {
            if (abilities[e].scale === "auto") {
                if (numOfHigh < 1) {
                    // create high modifier
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            modifier: abilityModifiers.high[level + 1]
                        }
                    }
                    numOfHigh++;
                } else if (numOfModerate + numOfHigh < 4) {
                    // create moderate modifier
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            modifier: abilityModifiers.moderate[level + 1]
                        }
                    }
                    numOfModerate++;
                } else {
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            modifier: abilityModifiers.low[level + 1]
                        }
                    }
                }
            }
        })
    }
    
    return abilities;
}