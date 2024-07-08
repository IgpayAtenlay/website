
import NumberInput from "./numberInput";
import camelCase from "../../util/camelCase";
import { ActivityContext } from ".";
import { useState, useContext } from "react";

export default function Modifiers(props) {
    var [complexModifier, setComplexModifier] = useState(true);

    return (
        <div>
            <h2>Hit Modifiers</h2>
            <button onClick={function() {setComplexModifier(!complexModifier)}}>{complexModifier ? "Simple Modifier" : "Complex Modifier"}</button>
            <NumberInput name="DC" />
            {!complexModifier && <NumberInput name="Modifier" />}
            {complexModifier && <div>
                <h3>Your Modifiers</h3>
                <NumberInput name="Attribute Score" extra="Self" />
                <NumberInput name="Circumstance Bonus" extra="Self" />
                <NumberInput name="Status Bonus" extra="Self" />
                <NumberInput name="Item Bonus" extra="Self" />
                <CircumstancePenalty name="Circumstance Penalty" extra="Self" />
                <NumberInput name="Status Penalty" extra="Self" />
                <NumberInput name="Item Penalty" extra="Self" />
                <NumberInput name="Untyped Penalty" extra="Self" />
                <h3>Enemy Modifiers</h3>
                <NumberInput name="Attribute Score" extra="Enemy" />
                <NumberInput name="Circumstance Bonus" extra="Enemy" />
                <NumberInput name="Status Bonus" extra="Enemy" />
                <NumberInput name="Item Bonus" extra="Enemy" />
                <CircumstancePenalty name="Circumstance Penalty" extra="Enemy" />
                <NumberInput name="Status Penalty" extra="Enemy" />
                <NumberInput name="Item Penalty" extra="Enemy" />
                <NumberInput name="Untyped Penalty" extra="Enemy" />
            </div>}
        </div>
    )
}

function CircumstancePenalty(props) {
    var [offGuard, setOffGuard] = useState(false);
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + camelCase(props.name) + "OffGuard" + props.extra;

    function handleChange(e) {
        setOffGuard(e.target.checked);
    }

    return (
        <div>
            {offGuard ? 
                <p>{props.name}: 2</p>
            :
                <NumberInput name={props.name} extra={props.extra} />
            }
            <input id={id} name={id} type="checkbox" onChange={handleChange}/>
            <label htmlFor={id}>Off Guard</label>
        </div>
    );
}