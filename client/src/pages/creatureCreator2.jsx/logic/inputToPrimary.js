export default function inputToPrimary(input) {
    if (Object.keys(input).length === 0) {
        return {}
    }

    console.log("primary start");

    var primary = {
        name: input.name,
        level: input.level,
        tags: [input.size],
        skills: [
            {
                name: input.primarySkill,
                scale: "high"
            }].concat(
                input.secondarySkills.map(e => {
                    return {
                        name: e,
                        scale: "moderate"
                    };
                })
            ),
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
            weaknesses: input.weaknesses,
            resistances: input.resistances,
            immunities: input.immunities
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
        }
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