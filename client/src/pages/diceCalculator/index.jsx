import { useState } from 'react';
//import "../../css/diceCalculator.css";
import allCalculations from './calculations';
import parseDice from './parseDice';
import Result from './result';
import SaveOrStrike from './saveOrStrike';
import Fortune from './fortune';

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
		}

		var result = allCalculations(data);
		setResult(result);
	}

return(
	<div>
		<h1>Dice Calculator</h1>

		<form method="POST" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="dC">DC:</label>
				<input id="dC" name="dC" />
			</div>
			<div>
				<label htmlFor="modifier">Modifier:</label>
				<input name="modifier" id="modifier" />
			</div>
			{saveOrStrike === "customDamage" &&
				<div>
					<label  className="newLine" htmlFor="critSuccessDice">On Crit Success:</label>
					<input name="critSuccessDice" id="critSuccessDice" />
				</div>
			}
			{saveOrStrike !== "basicSave" &&
				<div>
					<label htmlFor="successDice">On Success:</label>
					<input name="successDice" id="successDice" />
				</div>
			}
			{saveOrStrike !== "strike" &&
				<div>
					<label htmlFor="failDice">On Failure:</label>
					<input name="failDice" id="failDice" />
				</div>
			}
			{saveOrStrike === "customDamage" &&
				<div>
					<label htmlFor="critFailDice">On Crit Failure:</label>
					<input name="critFailDice" id="critFailDice" />
				</div>
			}
			<Fortune />
			<SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
			
			<input type="submit" value="Calculate" />
		</form>
		
		<Result result={result} />
	</div>);
};