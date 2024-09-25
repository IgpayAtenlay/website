import { skills, generalDamageTypes } from "../variables";

export default function inputToPrimary(input) {
    if (Object.keys(input).length === 0) {
        return {}
    }

    console.log("primary start");

    var primary = {
        name: input.name,
        level: parseInt(input.level),
        archetype: input.archetype,
        traits: [input.size ? input.size : "medium"].concat(input.traits),
        skills: Object.keys(skills).includes(input.primarySkill)
            ? 
                [
                    {
                        name: input.primarySkill,
                        scale: "high"
                    }
                ].concat(
                    input.secondarySkills.map(e => {
                        return {
                            name: e,
                            scale: "moderate"
                        };
                    })
                )
            :
                []
            ,
        attributes: {
            str: {
                scale: ""
            },
            dex: {
                scale: ""
            },
            con: {
                scale: ""
            },
            int: {
                scale: ""
            },
            wis: {
                scale: ""
            },
            cha: {
                scale: ""
            },
            [input.primaryAttribute]: {
                scale: "high"
            }
        },
        items: input.item === "none" ? [] : [
            {
                name: input.item
            }
        ],
        defenses: {
            weaknesses: (input.weaknesses).toSorted().map(e => {
                var scale;
                if (generalDamageTypes.includes(e)) {
                    scale = "low"
                } else {
                    scale = "high"
                }

                return {
                    type: e,
                    scale: scale
                }
            }),
            resistances: (input.resistances).toSorted().map(e => {
                var scale;
                if (generalDamageTypes.includes(e)) {
                    scale = "low"
                } else {
                    scale = "high"
                }

                return {
                    type: e,
                    scale: scale
                }
            }),
            immunities: input.immunities.toSorted()
        },
        spellTradition: input.spellTradition,
        attacks: input.attacks.map(e => {
            if (e.type === "agile") {
                return {
                    name: e.name,
                    range: "melee",
                    traits: [{name: "agile"}],
                    damageType: "slashing"
                }
            } else if (e.type === "melee") {
                return {
                    name: e.name,
                    range: "melee",
                    traits: [],
                    damageType: "bludgeoning"
                }
            } else if (e.type === "ranged") {
                return {
                    name: e.name,
                    range: "ranged",
                    traits: [{name: "range increment 60 feet"}],
                    damageType: "piercing"
                }
            } else {
                return {}
            }
        }),
        damageScale: {
            ranged: "moderate",
            melee: "high"
        },
        strikeModifier: {
            melee: "high",
            ranged: "moderate"
        },
        abilities: input.abilities.map(e => {
            var action = {
                oneAction: 1,
                twoActions: 2,
                threeActions: 3,
                reaction: "reaction",
                freeAction: "freeAction"
            }[e.actions];
            if (action === "reaction" || action === "freeAction") {
                return {
                    ...e,
                    actions: action
                }
            } else {
                return {
                    name: e.name,
                    effect: e.effect,
                    actions: action
                }
            }
        })
    };

    console.log("primary end");

    // archetype
    // traits
    // adjustments
    // other
    // choose attack scaling
    // abilities

    return primary;
}