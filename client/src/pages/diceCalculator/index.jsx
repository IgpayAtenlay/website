import { useState } from 'react';
//import "../../css/diceCalculator.css";
import allCalculations from './calculations';
import parseDice from './parseDice';
import Result from './result';
import SaveOrStrike from './saveOrStrike';

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
		
		var result = allCalculations(data);
		setResult(result);
	}

return(
	<div>
		<h1>Dice Calculator</h1>

		<form method="POST" onSubmit={handleSubmit}>
			<div>
				<label for="dC">DC:</label>
				<input id="dC" name="dC" />
			</div>
			<div>
				<label for="modifier">Modifier:</label>
				<input name="modifier" id="modifier" />
			</div>
			{saveOrStrike === "customDamage" &&
				<div>
					<label class="newLine" for="critSuccessDice">On Crit Success:</label>
					<input name="critSuccessDice" id="critSuccessDice" />
				</div>
			}
			{saveOrStrike !== "basicSave" &&
				<div>
					<label for="successDice">On Success:</label>
					<input name="successDice" id="successDice" />
				</div>
			}
			{saveOrStrike !== "strike" &&
				<div>
					<label for="failDice">On Failure:</label>
					<input name="failDice" id="failDice" />
				</div>
			}
			{saveOrStrike === "customDamage" &&
				<div>
					<label for="critFailDice">On Crit Failure:</label>
					<input name="critFailDice" id="critFailDice" />
				</div>
			}
			<div class="checkbox">
				<div>
					<input type="checkbox" class="fortune" name="fortune" id="fortune" />
					<label for="fortune">Fortune</label>
				</div>
				<div>
					<input type="checkbox" class="fortune" name="misfortune" id="misfortune" />
					<label for="misfortune">Misfortune</label>
				</div>
				<div>
					<input type="checkbox" class="fortune" name="rerollCritSuccess" id="rerollCritSuccess" value="CS" />
					<label for="rerollCritSuccess">Reroll Crit Success</label>
				</div>
				<div>
					<input type="checkbox" class="fortune" name="rerollSuccess" id="rerollSuccess" value="S" />
					<label for="rerollSuccess">Reroll Success</label>
				</div>
				<div>
					<input type="checkbox" class="fortune" name="rerollFail" id="rerollFail" value="F" />
					<label for="rerollFail">Reroll Failure</label>
				</div>
				<div>
					<input type="checkbox" class="fortune" name="rerollCritFail" id="rerollCritFail" value="CF" />
					<label for="rerollCritFail">Reroll Crit Failure</label>
				</div>
			</div>
			<SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
			
			<input type="submit" value="Calculate" />
		</form>
		
		<Result result={result} />
	</div>);
};