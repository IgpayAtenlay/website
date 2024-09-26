export default function secondaryToComplete(secondary) {
    if (Object.keys(secondary).length === 0) {
        return {}
    }

    console.log("complete start");
    
    var complete = JSON.parse(JSON.stringify(secondary));

    // fill in attributes randomly

    var attributeScaleAmounts = {
        extreme: 0,
        high: 0,
        moderate: 0,
        low: 0,
        terrible: 0
    }

    Object.keys(secondary.attributes).forEach(e => {
        if (secondary.attributes[e].scale !== "") {
            attributeScaleAmounts[secondary.attributes[e].scale] += 1;
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

    Object.keys(secondary.attributes).forEach(attribute => {
        if (secondary.attributes[attribute].scale === "") {
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
                        complete.attributes[attribute] = {
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

    // fill in defenses randomly

    if (secondary.defenses.hp.scale === "") {
        complete.defenses.hp = {
            scale: "moderate"
        }
    }

    if (secondary.defenses.ac.scale === "") {
        complete.defenses.ac = {
            scale: "moderate"
        }
    }

    var defenseScaleAmounts = {
        extreme: 0,
        high: 0,
        moderate: 0,
        low: 0,
        terrible: 0
    }

    Object.values(["fort", "ref", "will"]).forEach(e => {
        if (secondary.defenses[e].scale !== ""){
            defenseScaleAmounts[secondary.attributes[e].scale] += 1;
        }
    });

    // what number of each scale do you want for saves

    var defenseScaleWanted

    if (complete.defenses.ac.scale === "extreme" || complete.defenses.ac.scale === "high") {
        defenseScaleWanted = {
            extreme: 0,
            high: 1,
            moderate: 0,
            low: 2,
            terrible: 0
        }
    } else if (complete.defenses.ac.scale === "low" || complete.defenses.ac.scale === "terrible") {
        defenseScaleWanted = {
            extreme: 0,
            high: 2,
            moderate: 0,
            low: 1,
            terrible: 0
        }
    } else {
        defenseScaleWanted = {
            extreme: 0,
            high: 1,
            moderate: 1,
            low: 1,
            terrible: 0
        }
    }

    defenseScaleWanted = {
        extreme: defenseScaleWanted.extreme,
        high: defenseScaleWanted.high - defenseScaleAmounts.extreme - defenseScaleAmounts.high,
        moderate: defenseScaleWanted.moderate - defenseScaleAmounts.moderate,
        low: defenseScaleWanted.low - defenseScaleAmounts.low - defenseScaleAmounts.terrible,
        terrible: defenseScaleWanted.terrible
    }

    // assign them

    Object.values(["fort", "ref", "will"]).forEach(defense => {
        if (secondary.defenses[defense].scale === "") {
            var amountLeft = Object.values(defenseScaleWanted).reduce((accumulator, currentValue) => {
                if (currentValue > 0) {
                    return accumulator + 1;
                }
                return accumulator;
            });

            // change this to seed the randomness

            var random = Math.floor((Math.random() * amountLeft));
            Object.keys(defenseScaleWanted).forEach(scale => {
                if (defenseScaleWanted[scale] > 0) {
                    if (random === 0) {
                        complete.defenses[defense] = {
                            scale: scale
                        }
                        random -= 1;
                        defenseScaleWanted[scale] = defenseScaleWanted[scale] - 1;
                    } else {
                        random -= 1;
                    }
                }
            })
        }
    });

    console.log("complete done");

    return complete;
}