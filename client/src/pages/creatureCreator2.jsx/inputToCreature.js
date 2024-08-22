import { generalDamageTypes, skillModifiers, wirLevels } from "./variables";
import { v4 } from "uuid";

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
                color: "green",
                id: v4()
            }
        ],
        items: creatureInput.item === "none" ? [] : [
            {
                name: creatureInput.item,
                id: v4()
            }
        ],
        speed: [
            {
                type: "land", 
                modifier: 25,
                id: v4()
            }
        ],
        defenses: {
            weaknesses: creatureInput.weaknesses.map(e => {
                var amount;
                if (generalDamageTypes.includes(e)) {
                    amount = wirLevels.minimum[creatureInput.level + 1]
                } else {
                    amount = wirLevels.maximum[creatureInput.level + 1]
                }

                return {
                    type: e,
                    amount: amount,
                    id: v4()
                }
            }),
            resistances: creatureInput.resistances.map(e => {
                var amount;
                if (generalDamageTypes.includes(e)) {
                    amount = wirLevels.minimum[creatureInput.level + 1]
                } else {
                    amount = wirLevels.maximum[creatureInput.level + 1]
                }

                return {
                    type: e,
                    amount: amount,
                    id: v4()
                }
            }),
            immunities: creatureInput.immunities.map(e => {
                return {
                    type: e,
                    id: v4()
                }
            })
        }
    };

    creature.skills = [
        {
            name: creatureInput.primarySkill,
            modifier: skillModifiers.high[creatureInput.level + 1],
            scale: "high",
            id: v4()
        }];

    creature.skills = creature.skills.concat(
        creatureInput.secondarySkills.map(e => {
            return {
                name: e,
                modifier: skillModifiers.moderate[creatureInput.level + 1],
                scale: "moderate",
                id: v4()
            };
        })
    );

    // do archetype
    // do primary attribute
    // do traits

    return creature;
}