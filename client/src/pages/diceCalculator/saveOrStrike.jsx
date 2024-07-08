import camelCase from "../../util/camelCase";

import { ActivityContext } from ".";
import { useContext } from "react";

export default function SaveOrStrike(props) {
    var activity = useContext(ActivityContext);
    var name = activity.id + "saveOrStrike";

    function handleChange(e) {
		props.setSaveOrStrike(e.target.value);
	}

    return (
        <div>
            <label htmlFor={name}>Type of Attack</label>
            <select id={name} name={name} onChange={handleChange}>
            <RadioButton 
                name="Custom Damage"
            />
            <RadioButton 
                name="Strike"
            />
            <RadioButton 
                name="Basic Save"
            />
            </select>
        </div>
    );		
}

function RadioButton(props) {
    var activity = useContext(ActivityContext);
    var id = activity.id + camelCase(props.name);

    return(
        <option id={id} value={camelCase(props.name)}>{props.name}</option>
    );
}