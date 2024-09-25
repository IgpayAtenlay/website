import { skillModifiers, wirLevels, attributeModifiers, sizes, strikeDamage, strikeModifier, hp, commonDamageTypes, generalDamageTypes, saveModifier, ac } from "../variables";
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
        perception: {
            scale: "manual",
            modifier: 5
        },
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
            ac: {
                scale: complete.defenses.ac.scale,
                modifier: ac[complete.defenses.ac.scale][complete.level + 1]
            },
            fort: {
                scale: complete.defenses.fort.scale,
                modifier: saveModifier[complete.defenses.fort.scale][complete.level + 1]
            },
            ref: {
                scale: complete.defenses.ref.scale,
                modifier: saveModifier[complete.defenses.ref.scale][complete.level + 1]
            },
            will: {
                scale: complete.defenses.will.scale,
                modifier: saveModifier[complete.defenses.will.scale][complete.level + 1]
            },
            hp: {
                scale: complete.defenses.hp.scale,
                modifier: hp[complete.defenses.hp.scale][complete.level + 1]
            },
            weaknesses: complete.defenses.weaknesses.map(e => {
                return {
                    type: e.type,
                    scale: e.scale,
                    modifier: wirLevels[e.scale][complete.level + 1]
                }
            }),
            resistances: complete.defenses.resistances.map(e => {
                return {
                    type: e.type,
                    scale: e.scale,
                    modifier: wirLevels[e.scale][complete.level + 1]
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

    // additional hp from weaknesses

    values.defenses.hp.modifier = values.defenses.hp.modifier + values.defenses.weaknesses.reduce((maximum, e) => {
        var extraHP;
        if (commonDamageTypes.includes(e.type)) {
            extraHP = e.modifier * 4;
        } else {
            extraHP = e.modifier;
        }

        return Math.max(maximum, extraHP);
    }, 0) - values.defenses.resistances.reduce((maximum, e) => {
        var extraHP;
        if (generalDamageTypes.includes(e.type)) {
            extraHP = e.modifier * 4;
        } else {
            extraHP = e.modifier;
        }

        return Math.max(maximum, extraHP);
    }, 0)

    // add perception
    // add defenses (ex. AC)

    console.log("values done");

    return values;
}