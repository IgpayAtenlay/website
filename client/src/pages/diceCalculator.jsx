import "../css/diceCalculator.css";

export default function DiceCalculator() {
	return(
	<div>
		<h1>Dice Calculator</h1>

		<form action="/diceCalculator" method="POST">
			<label class="newLine">DC:</label>
				<input type="text" name="DC" />
			<label>Modifier:</label>
				<input type="text" name="modifier"  />
			<label class="investigator">Stratagem Modifier:</label>
				<input type="text" name="stratagemModifier" class="investigator" />
			<label class="newLine damage" for="critSuccessDice">On Crit Success:</label>
				<input class = "damage" type="text" name="critSuccessDice" />
			<label class = "damage" for="successDice">On Success:</label>
				<input class = "damage" type="text" name="successDice" />
			<label class = "damage" for="failDice">On Failure:</label>
				<input class = "damage" type="text" name="failDice" />
			<label class = "damage" for="critFailDice">On Crit Failure:</label>
				<input class = "damage" type="text" name="critFailDice" />
			<label class="newLine damage investigator" for="stratagemCritSuccessDice">Stratagem Crit Success:</label>
				<input class = "damage investigator" type="text" name="stratagemCritSuccessDice" />
			<label class = "damage investigator" for="stratagemSuccessDice">Stratagem Success:</label>
				<input class = "damage investigator" type="text" name="stratagemSuccessDice" />
			<label class = "damage investigator" for="stratagemFailDice">Stratagem Failure:</label>
				<input class = "damage investigator" type="text" name="stratagemFailDice" />
			<label class = "damage investigator" for="stratagemCritFailDice">Stratagem Crit Failure:</label>
				<input class = "damage investigator" type="text" name="stratagemCritFailDice" />
			<div class="newLine checkbox">
				<input type="checkbox" class="degreeOfSuccess" name="StoCS" />
				<label for="StoCS">Success to Crit Success</label><br />
				<input type="checkbox" class="degreeOfSuccess" name="FtoS" />
				<label for="FtoS">Fail to Success</label><br />
				<input type="checkbox" class="degreeOfSuccess" name="FtoCF" />
				<label for="FtoCF">Fail to Crit Fail</label><br />
				<input type="checkbox" class="degreeOfSuccess" name="CFtoS" />
				<label for="CFtoS">Crit Fail to Success</label><br />
				<input type="checkbox" class="degreeOfSuccess" name="CFtoF" />
				<label for="CFtoF">Crit Fail to Fail</label><br />
			</div>
			<div class="checkbox">
				<input type="checkbox" class="fortune" name="fortune" />
				<label for="fortune">Fortune</label><br />
				<input type="checkbox" class="fortune" name="misfortune" />
				<label for="misfortune">Misfortune</label><br />
				<input type="checkbox" class="fortune" name="rerollSuccess" value="S" />
				<label for="misfortune">Reroll Success</label><br />
				<input type="checkbox" class="fortune" name="rerollFail" value="F" />
				<label for="misfortune">Reroll Failure</label><br />
				<input type="checkbox" class="fortune" name="rerollCritFail" value="CF" />
				<label for="misfortune">Reroll Crit Failure</label><br />
			</div>
			<div class="checkbox">
				<input type="checkbox" class="damageType" name="strike" />
				<label for="fortune">Strike (damage on success, double on crit)</label><br />
				<input type="checkbox" class="damageType" name="basicSave" />
				<label for="misfortune">Basic Save</label><br />
			</div>
			<div class="checkbox">
				<input type="checkbox" name="investigator" />
				<label for="fortune">Devise a Stratagem</label><br />
			</div>
			
			<input type="submit" value="Calculate" />
		</form>

		<h2>Average</h2>
		<p></p>
		<h2>Max</h2>
		<p></p>
		<h2>Min</h2>
		<p></p>
		<h2>Percent of Critical Successes</h2>
		<p></p>
		<h2>Percent of Successes</h2>
		<p></p>
		<h2>Percent of Failures</h2>
		<p></p>
		<h2>Percent of Critical Failures</h2>
		<p></p>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
		<script src="js/diceCalculator.js" charset="utf-8"></script>
	</div>);
};