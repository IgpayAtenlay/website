import { abilityModifiers } from "../../variables";

export function updateAbilities(abilities, level) {
    
    // update abilities with assigned scale
    
    Object.keys(abilities).forEach(e => {
        if (abilities[e].scale !== "auto" && abilities[e].scale !== "manual") {
            abilities = {
                ...abilities,
                [e]: {
                    ...abilities[e],
                    number: abilityModifiers[abilities[e].scale][level + 1]
                }
            }
        }
    });

    // update abilities set to auto

    abilities = updateAutoAbilities(abilities, level);

    return abilities;
}

function updateAutoAbilities(abilities, level) {
    var abilityValuesArray = Object.values(abilities);
    
    // if there are items to autofill, do it

    if (abilityValuesArray.some(e => e.scale === "auto")) {
        
        // count number of each scale category

        var numOfHigh = abilityValuesArray.reduce((total, ability) => {
            if (ability.scale === "high" || ability.scale === "extreme") {
                return total + 1;
            } else if (ability.scale === "manual" && ability.number >= abilityModifiers.high[level + 1]) {
                return total + 1;
            }
            return total;
        }, 0);

        var numOfModerate = abilityValuesArray.reduce((total, ability) => {
            if (ability.scale === "moderate") {
                return total + 1;
            } else if (ability.scale === "manual" && ability.number > abilityModifiers.low[level + 1] && ability.number < abilityModifiers.high[level + 1]) {
                return total + 1;
            }
            return total;
        }, 0);

        // assign values to auto

        Object.keys(abilities).forEach(e => {
            if (abilities[e].scale === "auto") {
                if (numOfHigh < 1) {
                    // create high value
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            number: abilityModifiers.high[level + 1]
                        }
                    }
                    numOfHigh++;
                } else if (numOfModerate < 3) {
                    // create moderate value
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            number: abilityModifiers.moderate[level + 1]
                        }
                    }
                    numOfModerate++;
                } else {
                    abilities = {
                        ...abilities,
                        [e]: {
                            ...abilities[e],
                            number: abilityModifiers.low[level + 1]
                        }
                    }
                }
            }
        })
    }
    
    return abilities;
}