import { attributes } from "../variables";

export default function secondaryToComplete(secondary) {
    if (Object.keys(secondary).length === 0) {
        return {}
    }

    console.log("complete start");
    
    var complete = {
        ...secondary
    }

    // fill in attributes randomly

    var attributeScaleAmounts = {
        extreme: 0,
        high: 0,
        moderate: 0,
        low: 0,
        terrible: 0
    }

    Object.values(attributes).forEach(e => {
        if (secondary.attributes[e].scale !== ""){
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

    Object.values(attributes).forEach(attribute => {
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

    if(!secondary.defenses.hp) {
        complete.defenses.hp = {
            scale: "moderate"
        }
    }

    console.log("complete done");

    return complete;
}