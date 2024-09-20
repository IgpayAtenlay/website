import { generalDamageTypes, skillModifiers, wirLevels, attributeModifiers, sizes, strikeDamage, strikeModifier } from "../variables";
import sortSkills from "./sortSkills";

export default function completeToValues(complete) {
    if (Object.keys(complete).length === 0) {
        return {}
    }

    console.log("values start");

    var values = {
        name: complete.name,
        type: "creature",
        level: complete.level,
        traits: complete.traits.map(e => {
            if (sizes.includes(e)) {
                return {
                    text: e,
                    color: "green"
                }
            } else {
                return {
                    text: e,
                    color: "red"
                }
            }
            
        }),
        perception: 5,
        skills: sortSkills(complete.skills).map(e => {
            return {
                name: e.name,
                modifier: skillModifiers[e.scale][complete.level + 1],
                scale: e.scale
            }
        }),
        attributes: {
            str: {
                scale: complete.attributes.str.scale,
                modifier: attributeModifiers[complete.attributes.str.scale][complete.level + 1]
            },
            dex: {
                scale: complete.attributes.dex.scale,
                modifier: attributeModifiers[complete.attributes.dex.scale][complete.level + 1]
            },
            con: {
                scale: complete.attributes.con.scale,
                modifier: attributeModifiers[complete.attributes.con.scale][complete.level + 1]
            },
            int: {
                scale: complete.attributes.int.scale,
                modifier: attributeModifiers[complete.attributes.int.scale][complete.level + 1]
            },
            wis: {
                scale: complete.attributes.wis.scale,
                modifier: attributeModifiers[complete.attributes.wis.scale][complete.level + 1]
            },
            cha: {
                scale: complete.attributes.cha.scale,
                modifier: attributeModifiers[complete.attributes.cha.scale][complete.level + 1]
            }
        },
        items: complete.items.length > 0 && complete.items,
        defenses: {
            ac: 5,
            fort: 5,
            ref: 5,
            will: 5,
            hp: 5,
            weaknesses: (complete.defenses.weaknesses).toSorted().map(e => {
                var amount;
                if (generalDamageTypes.includes(e)) {
                    amount = wirLevels.minimum[complete.level + 1]
                } else {
                    amount = wirLevels.maximum[complete.level + 1]
                }

                return {
                    type: e,
                    amount: amount
                }
            }),
            resistances: (complete.defenses.resistances).toSorted().map(e => {
                var amount;
                if (generalDamageTypes.includes(e)) {
                    amount = wirLevels.minimum[complete.level + 1]
                } else {
                    amount = wirLevels.maximum[complete.level + 1]
                }

                return {
                    type: e,
                    amount: amount
                }
            }),
            immunities: (complete.defenses.immunities).toSorted()
        },
        speed: [
            {
                type: "land", 
                modifier: 25
            }
        ],
        attacks: complete.attacks.map(e => {
            if (e.range === "ranged") {
                return {
                    ...e,
                    damageDie: strikeDamage[complete.damageScale.ranged][complete.level + 1],
                    modifier: strikeModifier[complete.strikeModifier.ranged][complete.level + 1]
                }
            } else {
                var modifier = strikeModifier[complete.strikeModifier.melee][complete.level + 1];
                if (e.traits.some(e => e.name === "agile")) {
                    var melee = complete.damageScale.melee;
                    var agile;
                    switch(melee) {
                        case "extreme":
                            agile = "high";
                            break;
                        case "high":
                            agile = "moderate";
                            break;
                        default:
                            agile = "low";
                    }

                    return {
                        ...e,
                        damageDie: strikeDamage[agile][complete.level + 1],
                        modifier: modifier
                    }
                } else {
                    return {
                        ...e,
                        damageDie: strikeDamage[complete.damageScale.melee][complete.level + 1],
                        modifier: modifier
                    }
                }
            }
        }),
        abilities: complete.abilities
    };

    // add perception
    // add defenses (ex. AC)

    console.log("values done");

    return values;
}