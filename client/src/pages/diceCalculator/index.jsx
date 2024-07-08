import { useState, createContext } from 'react';
import {v4} from "uuid";

import "../../css/diceCalculator.css";

import allCalculations from './calculations';
import Result from './result';
import Activity from './activity';
import parseData from './parseData';

export var ActivityContext = createContext(null);

export default function DiceCalculator() {
	var[result, setResult] = useState({});
	var[activitys, setActivitys] = useState([{
		id: v4(),
		data: {},
		result: {}
	}]);

	function handleSubmit(e) {
		e.preventDefault();

		var rawData = Object.fromEntries(new FormData(e.target).entries());
		setActivitys(activities.map(e => {
			var activity = {
				...e
			}
			activity.data = parseData(rawData, e.id);
			activity.result = allCalculations(activity.data);
			return activity;
		}));
	}

	var activities = activitys.map((e, index) => {
		return (
			<ActivityContext.Provider key={e} value={e}>
				<div>
					<Activity />
					<Result />
				</div>
			</ActivityContext.Provider>
		)
		
	});

	return(
		<div className='diceCalculator'>
			<h1>Dice Calculator</h1>

			<form method="POST" onSubmit={handleSubmit}>
				<div className='activities'>
					{activities}
				</div>
				
				<input type="submit" value="Calculate" />
			</form>
		</div>
	);
};