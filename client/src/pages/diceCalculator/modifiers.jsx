
import NumberInput from "./numberInput";
import camelCase from "../../util/camelCase";
import { ActivityContext } from ".";
import { useState, useContext } from "react";

export default function Modifiers(props) {
    var [complexModifier, setComplexModifier] = useState(false);

    return (
        <div>
            <h2>Hit Modifiers</h2>
            <button onClick={function() {setComplexModifier(!complexModifier)}}>{complexModifier ? "Simple Modifier" : "Complex Modifier"}</button>
            {!complexModifier && <NumberInput name="DC" />}
            {!complexModifier && <NumberInput name="Modifier" />}
            {complexModifier && <div>
                <h3>Your Modifiers</h3>
                <NumberInput name="Modifier" />
                <h4>Bonus</h4>
                    <NumberInput name="Circumstance" extra="BonusSelf" />
                    <NumberInput name="Status" extra="BonusSelf" />
                    <NumberInput name="Item" extra="BonusSelf" />
                <h4>Penalty</h4>
                    <CircumstancePenalty name="Circumstance" extra="PenaltySelf" />
                    <NumberInput name="Status" extra="PenaltySelf" />
                    <NumberInput name="Item" extra="PenaltySelf" />
                    <NumberInput name="Untyped" extra="SelfPenalty" />
                <h3>Enemy Modifiers</h3>
                <NumberInput name="DC" />
                <h4>Bonus</h4>
                    <NumberInput name="Circumstance" extra="BonusEnemy" />
                    <NumberInput name="Status" extra="BonusEnemy" />
                    <NumberInput name="Item" extra="BonusEnemy" />
                <h4>Penalty</h4>
                    <CircumstancePenalty name="Circumstance" extra="PenaltyEnemy" />
                    <NumberInput name="Status" extra="PenaltyEnemy" />
                    <NumberInput name="Item" extra="PenaltyEnemy" />
                    <NumberInput name="Untyped" extra="PenaltyEnemy" />
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