
import NumberInput from "./numberInput";
import { ActivityContext } from ".";
import { useState, useContext } from "react";

export default function Modifiers(props) {
    var [complexModifier, setComplexModifier] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        setComplexModifier(!complexModifier);
    }

    return (
        <div>
            <h2>Hit Modifiers</h2>
            <button onClick={handleChange} aria-label={"show " + (complexModifier ? "Simple Modifier" : "Complex Modifier")}>{complexModifier ? "Simple Modifier" : "Complex Modifier"}</button>
            
            {!complexModifier ? <div>
                <NumberInput name="Modifier" />
                <NumberInput name="DC" />
            </div> : <div>
                <div role="group" aria-label="your modifiers">
                    <h3>Your Modifiers</h3>
                    <NumberInput name="Modifier" />
                    <div role="group" aria-label="bonus">
                        <h4>Bonus</h4>
                        <NumberInput name="Circumstance" extra="BonusSelf" />
                        <NumberInput name="Status" extra="BonusSelf" />
                        <NumberInput name="Item" extra="BonusSelf" />
                    </div>
                    <div role="group" aria-label="penalty">
                        <h4>Penalty</h4>
                        <NumberInput name="Circumstance" extra="PenaltySelf" />
                        <NumberInput name="Status" extra="PenaltySelf" />
                        <NumberInput name="Item" extra="PenaltySelf" />
                        <NumberInput name="Untyped" extra="PenaltySelf" />
                    </div>
                </div>
            
                <div role="group" aria-label="enemy modifiers">
                    <h3>Enemy Modifiers</h3>
                    <NumberInput name="DC" />
                    <div role="group" aria-label="bonus">
                        <h4>Bonus</h4>
                        <NumberInput name="Circumstance" extra="BonusEnemy" />
                        <NumberInput name="Status" extra="BonusEnemy" />
                        <NumberInput name="Item" extra="BonusEnemy" />
                    </div>
                    <div role="group" aria-label="penalty">
                        <h4>Penalty</h4>
                        <OffGuard name="Circumstance" extra="PenaltyEnemy" />
                        <NumberInput name="Status" extra="PenaltyEnemy" />
                        <NumberInput name="Item" extra="PenaltyEnemy" />
                        <NumberInput name="Untyped" extra="PenaltyEnemy" />
                    </div>
                </div>
            </div>}
        </div>
    )
}

function OffGuard(props) {
    var [offGuard, setOffGuard] = useState(false);
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + "offGuard";

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