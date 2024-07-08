import camelCase from "../../util/camelCase";

import { ActivityContext } from ".";
import { useContext } from "react";

export default function SaveOrStrike(props) {
    return (
        <div>
            <h2>Type of Attack</h2>
            <RadioButton 
                name="Custom Damage"
                setSaveOrStrike={props.setSaveOrStrike}
                default={true}
            />
            <RadioButton 
                name="Strike"
                setSaveOrStrike={props.setSaveOrStrike}
            />
            <RadioButton 
                name="Basic Save"
                setSaveOrStrike={props.setSaveOrStrike}
            />
        </div>
    );		
}

function RadioButton(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + camelCase(props.name);
    var name = activityID + "saveOrStrike";

    function handleChange(e) {
		props.setSaveOrStrike(e.target.value);
	}

    return(
        <div>
            <input 
                type="radio"
                name={name}
                id={id}
                value={camelCase(props.name)}
                onChange={handleChange}
                defaultChecked={props.default}
            />
            <label htmlFor={id}>{props.name}</label>
        </div>
    );
}