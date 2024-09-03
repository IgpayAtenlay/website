import { skills } from "../variables";

export default function primaryToSecondary(primary) {
    if (Object.keys(primary).length === 0) {
        return {}
    }

    console.log("secondary start");
    
    var secondary = {
        ...primary,
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
        }),
    }

   

    console.log("secondary done");

    // add spells based on tradition

    return secondary;
}