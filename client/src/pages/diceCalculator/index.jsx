import { useState, createContext, useContext } from 'react';
import {v4} from "uuid";

import "../../css/diceCalculator.css";

import allCalculations from './calculations';
import Result from './result';
import Activity from './activity';
import parseData from './parseData';
import { useTitle } from '../../util/title';
import { GithubLinkContext } from '../../App';

export var ActivityContext = createContext(null);

export default function DiceCalculator() {
	useTitle("Dice Calculator");
	var {setGithubLink} = useContext(GithubLinkContext);
	setGithubLink("/website/blob/main/client/src/pages/diceCalculator/README.md");

	var[activities, setActivities] = useState([{id: v4()},{id: v4()}]);

	function handleSubmit(e) {
		e.preventDefault();

		var rawData = Object.fromEntries(new FormData(e.target).entries());
		setActivities(activities.map(e => {
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
					<button id={e.id} onClick={removeActivity}>-</button>
					<Activity />
					<Result />
				</div>
			</ActivityContext.Provider>
		)
		
	});

	function removeActivity(e) {
		e.preventDefault();
		setActivities(activities.filter(a => a.id !== e.target.id));
	}

	function addActivity(e) {
		e.preventDefault();
		setActivities(activities.concat({id: v4()}));
	}

	return(
		<div className='diceCalculator'>
			<h1>Dice Calculator</h1>

			<form method="POST" onSubmit={handleSubmit}>
				<div className='activities'>
					{activityArray}
					<button onClick={addActivity}>+</button>
				</div>
				
				<input type="submit" value="Calculate" />
			</form>
		</div>
	);
};