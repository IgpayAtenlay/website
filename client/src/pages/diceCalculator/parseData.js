import parseDice from './parseDice';

export default function parseData(rawData, activityID) {
    var modifiedDataArray = activityID.map(e => {
        var modifiedData = {
            dc: rawData[e + "dc"],
            modifier: rawData[e + "modifier"],
            saveOrStrike: rawData[e + "saveOrStrike"],
            dice: {
                critSuccess: parseDice(rawData[e + "critSuccessDice"]),
                success: parseDice(rawData[e + "successDice"]),
                fail: parseDice(rawData[e + "failDice"]),
                critFail: parseDice(rawData[e + "critFailDice"])
            }
        }
    
        if (rawData[e + "fortune"] === "advantage") {
            modifiedData.advantage = true;
        } else if (rawData[e + "fortune"] === "disadvantage") {
            modifiedData.disadvantage = true;
        } else if (rawData[e + "fortune"] === "reroll") {
            modifiedData.reroll = {}
            if (rawData[e + "critSuccessReroll"]) {
                modifiedData.reroll.critSuccess = true;
            }
            if (rawData[e + "successReroll"]) {
                modifiedData.reroll.success = true;
            }
            if (rawData[e + "failReroll"]) {
                modifiedData.reroll.fail = true;
            }
            if (rawData[e + "critFailReroll"]) {
                modifiedData.reroll.critFail = true;
            }
        }

        return modifiedData;
    });

    return modifiedDataArray;
}