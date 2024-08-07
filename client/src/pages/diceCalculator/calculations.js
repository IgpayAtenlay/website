var DCToAccuracyTable = {};
var DCToAccuracyTableAdvantage = {};
var DCToAccuracyTableDisadvantage = {};

// high level

export default function allCalculations(data) {
	var result = {};
	
	// accuracy
	var effectiveDC = getEffectiveDC(data.dc, data.modifier);
	if (data.advantage) {
		result.accuracy = getAccuracyAdvantage(effectiveDC, true);
	} else if (data.disadvantage) {
		result.accuracy = getAccuracyAdvantage(effectiveDC, false);
	} else {
		result.accuracy = getAccuracy(effectiveDC);
	}

	if (data.reroll) {
		result.accuracy = calculateAccuracyReroll(result.accuracy, data.reroll);
	}

	// damage
	result.averageDamage = calculateDamage(data.dice, result.accuracy, data.saveOrStrike);
	result.maxDamage = calculateMaxDamage(data.dice, data.saveOrStrike);
	result.minDamage = calculateMinDamage(data.dice, data.saveOrStrike);

	return result;
}

// damage

function calculateAverageDamage(dice) {
	if (dice) {
		var damage = 0;
		for (var [dieSize, numOfDice] of Object.entries(dice)) {
			damage += (dieSize / 2 + 0.5) * numOfDice;
		}

		return damage;
	} else {
		return 0;
	}
}

function calculateDamage(dice, accuracy, saveOrStrike) {
	var averageDamage = 0;
	var damage = 0;
	if (dice) {
		if (saveOrStrike === "basicSave") {
			averageDamage = calculateAverageDamage(dice.fail);
			damage = 0;
			damage += averageDamage * accuracy.success / 2;
			damage += averageDamage * accuracy.fail;
			damage += averageDamage * accuracy.critFail * 2;

			return damage;
		} if (saveOrStrike === "strike") {
			averageDamage = calculateAverageDamage(dice.success);
			damage = 0;
			damage += averageDamage * accuracy.success;
			damage += averageDamage * accuracy.critSuccess * 2;
	
			return damage;
		} else {
			damage = 0;
			damage += calculateAverageDamage(dice.critSuccess) * accuracy.critSuccess;
			damage += calculateAverageDamage(dice.success) * accuracy.success;
			damage += calculateAverageDamage(dice.fail) * accuracy.fail;
			damage += calculateAverageDamage(dice.critFail) * accuracy.critFail;

			return damage;
		}
	} else {
		return 0;
	}
}

function calculateMaxDamage(dice, saveOrStrike) {
	var damage = {};
	var dieSize;
	var numOfDice;

	if (dice.critSuccess) {
		damage.critSuccess = 0;
		for ([dieSize, numOfDice] of Object.entries(dice.critSuccess)) {
			damage.critSuccess += dieSize * numOfDice;
		}
	}

	if (dice.success) {
		damage.success = 0;
		for ([dieSize, numOfDice] of Object.entries(dice.success)) {
			damage.success += dieSize * numOfDice;
		}
	}

	if (dice.fail) {
		damage.fail = 0;
		for ([dieSize, numOfDice] of Object.entries(dice.fail)) {
			damage.fail += dieSize * numOfDice;
		}
	}

	if (dice.critFail) {
		damage.critFail = 0;
		for ([dieSize, numOfDice] of Object.entries(dice.critFail)) {
			damage.critFail += dieSize * numOfDice;
		}
	}
	
	var maxDamage = NaN;

	if (saveOrStrike === "basicSave") {
		maxDamage = damage.fail * 2;
	} else if (saveOrStrike === "strike") {
		maxDamage = damage.success * 2;
	} else {
		maxDamage = max(damage.critSuccess, damage.success, damage.fail, damage.critFail);
	}

	if (maxDamage < 1) {
		maxDamage = 1;
	}

	if (isNaN(maxDamage)) {
		maxDamage = 0;
	}

	return maxDamage;
}

function calculateMinDamage(dice, saveOrStrike) {
	var damage = {};
	var numOfDice;
	
	if (dice.critSuccess) {
		damage.critSuccess = 0;
		for (numOfDice of Object.values(dice.critSuccess)) {
			damage.critSuccess += numOfDice;
		}
	}

	if (dice.success) {
		damage.success = 0;
		for (numOfDice of Object.values(dice.success)) {
			damage.success += numOfDice;
		}
	}

	if (dice.fail) {
		damage.fail = 0;
		for (numOfDice of Object.values(dice.fail)) {
			damage.fail += numOfDice;
		}
	}

	if (dice.critFail) {
		damage.critFail = 0;
		for (numOfDice of Object.values(dice.critFail)) {
			damage.critFail += numOfDice;
		}
	}

	var minDamage = NaN;

	if (saveOrStrike === "basicSave") {
		minDamage = Math.floor(damage.fail / 2);
	} else if (saveOrStrike === "strike") {
		minDamage = damage.success;
	} else {
		minDamage = min(damage.critSuccess, damage.success, damage.fail, damage.critFail);
	}

	if (minDamage < 1) {
		minDamage = 1;
	}

	if (isNaN(minDamage)) {
		minDamage = 0;
	}

	return minDamage;
}

// accuracy

function getEffectiveDC(DC, totalModifier) {
	return DC - totalModifier;
}

function getAccuracy(effectiveDC) {
	if (effectiveDC > 30) {
		effectiveDC = 30;
	} else if (effectiveDC < -9) {
		effectiveDC = -9;
	}

	if (!(effectiveDC in DCToAccuracyTable)) {
		calculateAccuracy(effectiveDC);
	}

	return {...DCToAccuracyTable[effectiveDC]};
}

function calculateAccuracy(effectiveDC) {
	var numberSuccesses = {
		critSuccess: 0,
		success: 0,
		fail: 0,
		critFail: 0
	}

	for (var die = 1; die <= 20; die++) {
		if (die === 1) {
			if (die >= effectiveDC + 10) {
				numberSuccesses.success++;
			} else if (die >= effectiveDC) {
				numberSuccesses.fail++;
			} else {
				numberSuccesses.critFail++;
			}
		} else if (die === 20) {
			if (die >= effectiveDC) {
				numberSuccesses.critSuccess++;
			} else if (die <= effectiveDC - 10) {
				numberSuccesses.fail++;
			} else {
				numberSuccesses.success++;
			}
		} else {
			if (die >= effectiveDC + 10) {
				numberSuccesses.critSuccess++;
			} else if (die >= effectiveDC) {
				numberSuccesses.success++;
			} else if (die <= effectiveDC - 10) {
				numberSuccesses.critFail++;
			} else {
				numberSuccesses.fail++;
			}
		}
	}

	DCToAccuracyTable[effectiveDC] = {
		critSuccess: numberSuccesses.critSuccess / 20,
		success: numberSuccesses.success / 20,
		fail: numberSuccesses.fail / 20,
		critFail: numberSuccesses.critFail / 20
	}
}

function calculateAccuracyReroll(oldAccuracy, reroll) {
	var accuracy = {
		...oldAccuracy
	};
	var percentReroll = 0;
	
	if (reroll.critFail) {
		percentReroll += oldAccuracy.critFail;
		accuracy = {
			...accuracy,
			critFail: 0
		}
	}
	if (reroll.fail) {
		percentReroll += oldAccuracy.fail;
		accuracy = {
			...accuracy,
			fail: 0
		}
	}
	if (reroll.success) {
		percentReroll += oldAccuracy.success;
		accuracy = {
			...accuracy,
			success: 0
		}
	}
	if (reroll.critSuccess) {
		percentReroll += oldAccuracy.critSuccess;
		accuracy = {
			...accuracy,
			critSuccess: 0
		}
	}

	accuracy = {
		critSuccess: accuracy.critSuccess + oldAccuracy.critSuccess * percentReroll,
		success: accuracy.success + oldAccuracy.success * percentReroll,
		fail: accuracy.fail + oldAccuracy.fail * percentReroll,
		critFail: accuracy.critFail + oldAccuracy.critFail * percentReroll,
	}

	return accuracy;
}

function getAccuracyAdvantage(effectiveDC, isAdvantage) {
	if (effectiveDC > 100) {
		effectiveDC = 100;
	} else if (effectiveDC < -100) {
		effectiveDC = -100;
	}

	if (isAdvantage) {
		if (!(effectiveDC in DCToAccuracyTableAdvantage)) {
			calculateAccuracyAdvantage(effectiveDC, isAdvantage);
		}
	
		return {
			critSuccess: DCToAccuracyTableAdvantage[effectiveDC].critSuccess,
			success: DCToAccuracyTableAdvantage[effectiveDC].success,
			fail: DCToAccuracyTableAdvantage[effectiveDC].fail,
			critFail: DCToAccuracyTableAdvantage[effectiveDC].critFail
		};
	} else {
		if (!(effectiveDC in DCToAccuracyTableDisadvantage)) {
			calculateAccuracyAdvantage(effectiveDC, isAdvantage);
		}
	
		return {...DCToAccuracyTableDisadvantage[effectiveDC]};
	}
	
}

function calculateAccuracyAdvantage(effectiveDC, isAdvantage) {
	var numberSuccesses = {
		critSuccess: 0,
		success: 0,
		fail: 0,
		critFail: 0
	}

	var die;

	for (var dieOne = 1; dieOne <= 20; dieOne++) {
		for (var dieTwo = 1; dieTwo <= 20; dieTwo++) {
			if (isAdvantage) {
				die = Math.max(dieOne, dieTwo);
			} else {
				die = Math.min(dieOne, dieTwo);
			}
			
			if (die === 1) {
				if (die >= effectiveDC + 10) {
					numberSuccesses.success++;
				} else if (die >= effectiveDC) {
					numberSuccesses.fail++;
				} else {
					numberSuccesses.critFail++;
				}
			} else if (die === 20) {
				if (die >= effectiveDC) {
					numberSuccesses.critSuccess++;
				} else if (die <= effectiveDC - 10) {
					numberSuccesses.fail++;
				} else {
					numberSuccesses.success++;
				}
			} else {
				if (die >= effectiveDC + 10) {
					numberSuccesses.critSuccess++;
				} else if (die >= effectiveDC) {
					numberSuccesses.success++;
				} else if (die <= effectiveDC - 10) {
					numberSuccesses.critFail++;
				} else {
					numberSuccesses.fail++;
				}
			}
		}
	}

	if (isAdvantage) {
		DCToAccuracyTableAdvantage[effectiveDC] = {
			critSuccess: numberSuccesses.critSuccess / 400,
			success: numberSuccesses.success / 400,
			fail: numberSuccesses.fail / 400,
			critFail: numberSuccesses.critFail / 400
		}
	} else {
		DCToAccuracyTableDisadvantage[effectiveDC] = {
			critSuccess: numberSuccesses.critSuccess / 400,
			success: numberSuccesses.success / 400,
			fail: numberSuccesses.fail / 400,
			critFail: numberSuccesses.critFail / 400
		}
	}
}

// math

function min(...nums) {
	var min = NaN;
	for (var num of nums) {
		if (!isNaN(num)) {
			if (isNaN(min)) {
				min = num;
			} else {
				min = Math.min(min, num);
			}
		}
	}

	return min;
}

function max(...nums) {
	var max = NaN;
	for (var num of nums) {
		if (!isNaN(num)) {
			if (isNaN(max)) {
				max = num;
			} else {
				max = Math.max(max, num);
			}
		}
	}

	return max;
}