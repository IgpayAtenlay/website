import { perceptionModifiers, abilityModifiers } from "../../variables";

export default function updatePerception(perception, level, wisdom) {
    if (perception.scale === "auto") {

        // choose scale based on wisdom scale

        var scale = wisdom.scale;
        if (scale === "auto" || scale === "manual") {

            // identify wisdom scale based on number

            if (wisdom.number >= abilityModifiers.extreme[level + 1]) {
                scale = "extreme";
            } else if (wisdom.number >= abilityModifiers.high[level + 1]) {
                scale = "high";
            } else if (wisdom.number >= abilityModifiers.moderate[level + 1]) {
                scale = "moderate";
            } else if (wisdom.number >= abilityModifiers.low[level + 1]) {
                scale = "low";
            } else {
                scale = "terrible";
            } 
        }

        // calculate perception based on scale

        perception = {
            ...perception,
            value: perceptionModifiers[scale][level + 1]
        }

    } else if (perception.scale !== "manual") {

        // calculate perception based on scale

        perception = {
            ...perception,
            value: perceptionModifiers[perception.scale][level + 1]
        }
    }

    return perception;
}