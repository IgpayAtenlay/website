import { archetype, skills, traits } from "../variables";

export default function primaryToSecondary(primary) {
    if (Object.keys(primary).length === 0) {
        return {}
    }

    console.log("secondary start");
    
    var secondary = {
        ...primary,
        attributes: {
            ...primary.attributes,
            ...archetype[primary.archetype].attributes
        },
        skills: primary.skills.map(e => {
            var scale = "moderate";
            var attribute = skills[e.name];
            if (primary.attributes[attribute].scale === "") {
                return {
                    ...e,
                    scale: scale
                }
            } else {
                return e
            }
        })
    }

    console.log("secondary middle");

    primary.traits.forEach(e => {
        if (traits[e]) {
            secondary.attributes = {
                ...secondary.attributes,
                ...traits[e].attributes
            }
            if (traits[e].resistances) {
                secondary.defenses.resistances = primary.defenses.resistances.concat(traits[e].resistances);
            }
            if (traits[e].immunities) {
                secondary.defenses.immunities = primary.defenses.immunities.concat(traits[e].immunities);
            }
            if (traits[e].weaknesses) {
                secondary.defenses.weaknesses = primary.defenses.weaknesses.concat(traits[e].weaknesses);
            }
        }
    });

    console.log("secondary done");

    // add spells based on tradition

    return secondary;
}