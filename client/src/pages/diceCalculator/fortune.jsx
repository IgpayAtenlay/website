import { useState } from 'react';
import Reroll from './reroll';
import { ActivityContext } from ".";
import { useContext } from "react";

export default function Fortune(props) {
    var[reroll, setReroll] = useState(false);
    var activity = useContext(ActivityContext);
    var name = activity.id + "fortune";

    function handleChange(e) {
		setReroll(e.target.value === "reroll");
	}
    
    return (
        <div>
            <label htmlFor={name}>Fortune Effects: </label>
            <select id={name} name={name} onChange={handleChange}>
                <Option name="None" value="none" />
                <Option name="Roll two, take highest" value="advantage" />
                <Option name="Roll two, take lowest" value="disadvantage" />
                <Option name="Reroll" value="reroll" />
            </select>
            {reroll && 
                <Reroll />
            }
        </div>
    );		
}

function Option(props) {
    var activity = useContext(ActivityContext);
    var id = activity.id + props.value;

    return(
        <option id={id} value={props.value}>{props.name}</option>
    );
}