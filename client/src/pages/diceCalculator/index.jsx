import { useState } from 'react';
import "../../css/diceCalculator.css";
import allCalculations from './calculations';
import parseDice from './parseDice';
import Result from './result';
import SaveOrStrike from './saveOrStrike';
import Fortune from './fortune';
import Dice from './dice';

export default function DiceCalculator() {
	var[result, setResult] = useState({});
	var[saveOrStrike, setSaveOrStrike] = useState("customDamage");

	function handleSubmit(e) {
		e.preventDefault();

		var rawData = Object.fromEntries(new FormData(e.target).entries());
		var data = {
			dC: rawData.dC,
			modifier: rawData.modifier,
			saveOrStrike: rawData.saveOrStrike,
			dice: {
				critSuccess: parseDice(rawData.critSuccessDice),
				success: parseDice(rawData.successDice),
				fail: parseDice(rawData.failDice),
				critFail: parseDice(rawData.critFailDice)
			}
		}

		if (rawData.fortune === "advantage") {
			data.advantage = true;
		} else if (rawData.fortune === "disadvantage") {
			data.disadvantage = true;
		} else if (rawData.fortune === "reroll") {
			data.reroll = {}
			if (rawData.critSuccessReroll) {
				data.reroll.critSuccess = true;
			}
			if (rawData.successReroll) {
				data.reroll.success = true;
			}
			if (rawData.failReroll) {
				data.reroll.fail = true;
			}
			if (rawData.critFailReroll) {
				data.reroll.critFail = true;
			}
		}

		var result = allCalculations(data);
		setResult(result);
	}

	return(
		<div>
			<h1>Dice Calculator</h1>

			<form method="POST" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="dC">DC: </label>
					<input id="dC" name="dC" />
				</div>
				<div>
					<label htmlFor="modifier">Modifier: </label>
					<input name="modifier" id="modifier" />
				</div>
				<Dice saveOrStrike={saveOrStrike} />
				<Fortune />
				<SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
				
				<input type="submit" value="Calculate" />
			</form>
			
			<Result result={result} />
		</div>
	);
};