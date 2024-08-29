import { generalDamageTypes, skillModifiers, wirLevels, attributeModifiers, attributes } from "./variables";
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

    creature.abilities = {
        [creatureInput.primaryAttribute]: {
            modifier: attributeModifiers["high"][creatureInput.level + 1], 
            scale: "high"
        }
    }

    // do other relivent attributes

    

    // fill in the rest randomly

    var attributeScaleAmounts = {
        extreme: 0,
        high: 0,
        moderate: 0,
        low: 0,
        terrible: 0
    }

    Object.values(attributes).forEach(e => {
        if (creature.abilities[e]){
            attributeScaleAmounts[creature.abilities[e].scale] += 1;
        }
    });

    // choose amounts of each - currently 1 high 3 moderate and 2 low

    var attributeScaleWanted = {
        extreme: 0,
        high: 1 - attributeScaleAmounts.extreme - attributeScaleAmounts.high,
        moderate: 3 - attributeScaleAmounts.moderate,
        low: 2 - attributeScaleAmounts.low - attributeScaleAmounts.terrible,
        terrible: 0
    }

    Object.values(attributes).forEach(attribute => {
        if (!creature.abilities[attribute]) {
            var amountLeft = Object.values(attributeScaleWanted).reduce((accumulator, currentValue) => {
                if (currentValue > 0) {
                    return accumulator + 1;
                }
                return accumulator;
            });

            // change this to seed the randomness

            var random = Math.floor((Math.random() * amountLeft));
            Object.keys(attributeScaleWanted).forEach(scale => {
                if (attributeScaleWanted[scale] > 0) {
                    if (random === 0) {
                        creature.abilities[attribute] = {
                            modifier: attributeModifiers[scale][creatureInput.level + 1], 
                            scale: scale
                        }
                        random -= 1;
                        attributeScaleWanted[scale] = attributeScaleWanted[scale] - 1;
                    } else {
                        random -= 1;
                    }
                }
            })
        }
    });

    // do traits

    return creature;
}