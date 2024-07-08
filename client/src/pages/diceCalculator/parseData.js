import parseDice from './parseDice';

export default function parseData(rawData, id) {
    function string(name) {
        return rawData[id + name];
    }

    function number(name) {
        return parseInt(rawData[id + name]);
    }

    var modifiedData = {
        dc: number("dc"),
        modifier: number("modifier"),
        saveOrStrike: string("saveOrStrike"),
        dice: {
            critSuccess: parseDice(string("critSuccessDice")),
            success: parseDice(string("successDice")),
            fail: parseDice(string("failDice")),
            critFail: parseDice(string("critFailDice"))
        }
    }

    if (string("circumstanceBonusSelf")) {
        // if it has complex modifier
        if (string("offGuard")) {
            // circumstance penalty = 2
            modifiedData.dc = number("dc") + number("circumstanceBonusEnemy") + number("statusBonusEnemy") + number("itemBonusEnemy") - 2 - number("statusPenaltyEnemy") - number("itemPenaltyEnemy") - number("untypedPenaltyEnemy");
        } else {
            modifiedData.dc = number("dc") + number("circumstanceBonusEnemy") + number("statusBonusEnemy") + number("itemBonusEnemy") - number("circumstancePenaltyEnemy") - number("statusPenaltyEnemy") - number("itemPenaltyEnemy") - number("untypedPenaltyEnemy");
        }
        modifiedData.modifier = number("modifier") + number("circumstanceBonusSelf") + number("statusBonusSelf") + number("itemBonusSelf") - number("circumstancePenaltySelf") - number("statusPenaltySelf") - number("itemPenaltySelf") - number("untypedPenaltySelf");
    }

    if (string("fortune") === "advantage") {
        modifiedData.advantage = true;
    } else if (string("fortune") === "disadvantage") {
        modifiedData.disadvantage = true;
    } else if (string("fortune") === "reroll") {
        modifiedData.reroll = {}
        if (string("critSuccessReroll")) {
            modifiedData.reroll.critSuccess = true;
        }
        if (string("successReroll")) {
            modifiedData.reroll.success = true;
        }
        if (string("failReroll")) {
            modifiedData.reroll.fail = true;
        }
        if (string("critFailReroll")) {
            modifiedData.reroll.critFail = true;
        }
    }

    return modifiedData;
}

