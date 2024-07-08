import { useState, createContext } from 'react';
import {v4} from "uuid";

import "../../css/diceCalculator.css";

import allCalculations from './calculations';
import Result from './result';
import Activity from './activity';
import parseData from './parseData';

export var ActivityContext = createContext(null);

export default function DiceCalculator() {
	var[activities, setActivities] = useState([{id: v4(), result: {}},{id: v4(), result: {}}]);

	function handleSubmit(e) {
		e.preventDefault();

		var rawData = Object.fromEntries(new FormData(e.target).entries());
		setActivities(activities.map(e => {
			console.log(e.id);
			var activity = {
				...e
			}
			activity.data = parseData(rawData, e.id);
			activity.result = allCalculations(activity.data);
			return activity;
		}));
	}

	var activityArray = activities.map((e) => {
		return (
			<ActivityContext.Provider key={e.id} value={e}>
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
					{activityArray}
				</div>
				
				<input type="submit" value="Calculate" />
			</form>
		</div>
	);
};