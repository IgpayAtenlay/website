import { useState, createContext } from 'react';
import {v4} from "uuid";

import "../../css/diceCalculator.css";

import allCalculations from './calculations';
import Result from './result';
import Activity from './activity';
import parseData from './parseData';

export var ActivityIDContext = createContext(null);

export default function DiceCalculator() {
	var[result, setResult] = useState({});
	var[activityIDs, setActivityIDs] = useState([v4()]);

	function handleSubmit(e) {
		e.preventDefault();

		var rawData = Object.fromEntries(new FormData(e.target).entries());
		var data = parseData(rawData, activityIDs);
		var result = allCalculations(data[0]);
		setResult(result);
	}

	var activities = activityIDs.map((e) => {
		return (
			<ActivityIDContext.Provider key={e} value={e}>
				<Activity />
			</ActivityIDContext.Provider>
		)
		
	});

	return(
		<div>
			<h1>Dice Calculator</h1>

			<form method="POST" onSubmit={handleSubmit}>
				<div className='activities'>
					{activities}
				</div>
				
				<input type="submit" value="Calculate" />
			</form>
			
			<Result result={result} />
		</div>
	);
};