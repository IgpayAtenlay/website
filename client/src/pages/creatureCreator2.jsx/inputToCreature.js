import { skillModifiers } from "./variables";

export default function inputToCreature(creatureInput) {
    if (Object.keys(creatureInput).length === 0) {
        return {}
    }

    var creature = {
        name: creatureInput.name,
        type: "creature",
        level: creatureInput.level,
        tags: [
            {
                text: creatureInput.size,
                color: "green"
            }
        ],
        items: creatureInput.item === "none" ? [] : [
            {
                name: creatureInput.item,
            }
        ],
        speed: [
            {
                type: "land", 
                modifier: 25
            }
        ]
    };

    creature.skills = [
        {
            name: creatureInput.primarySkill,
            modifier: skillModifiers.high[parseInt(creatureInput.level) + 1],
            scale: "high"
        }];

    creature.skills = creature.skills.concat(
        creatureInput.secondarySkills.map(e => {
            return {
                name: e,
                modifier: skillModifiers.moderate[parseInt(creatureInput.level) + 1],
                scale: "moderate"
            };
        })
    );

    // do traits
    // do wir

    return creature;
}