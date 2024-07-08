import parseDice from './parseDice';

export default function parseData(rawData, id) {
    var modifiedData = {
        dc: rawData[id + "dc"],
        modifier: rawData[id + "modifier"],
        saveOrStrike: rawData[id + "saveOrStrike"],
        dice: {
            critSuccess: parseDice(rawData[id + "critSuccessDice"]),
            success: parseDice(rawData[id + "successDice"]),
            fail: parseDice(rawData[id + "failDice"]),
            critFail: parseDice(rawData[id + "critFailDice"])
        }
    }

    if (rawData[id + "fortune"] === "advantage") {
        modifiedData.advantage = true;
    } else if (rawData[id + "fortune"] === "disadvantage") {
        modifiedData.disadvantage = true;
    } else if (rawData[id + "fortune"] === "reroll") {
        modifiedData.reroll = {}
        if (rawData[id + "critSuccessReroll"]) {
            modifiedData.reroll.critSuccess = true;
        }
        if (rawData[id + "successReroll"]) {
            modifiedData.reroll.success = true;
        }
        if (rawData[id + "failReroll"]) {
            modifiedData.reroll.fail = true;
        }
        if (rawData[id + "critFailReroll"]) {
            modifiedData.reroll.critFail = true;
        }
    }

    return modifiedData;
}