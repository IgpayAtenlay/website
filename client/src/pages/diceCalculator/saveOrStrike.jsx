import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";

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
            <label htmlFor={name}>Type of Attack: </label>
            <select id={name} name={name} onChange={handleChange}>
                <Option name="strike" />
                <Option name="basic save" />
                <Option name="custom damage" />
            </select>
        </div>
    );		
}

function Option(props) {
    var activity = useContext(ActivityContext);
    var id = activity.id + camelCase(props.name);

    return(
        <option id={id} value={camelCase(props.name)}>{startCase(props.name)}</option>
    );
}