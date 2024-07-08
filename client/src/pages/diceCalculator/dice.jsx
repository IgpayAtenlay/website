import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";
import { ActivityContext } from ".";
import { useContext } from "react";

export default function Dice(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var dice = [<h2 key={activityID}>Damage Dice</h2>];

    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit success" key={activityID + "crit success"} />);
    }
    if (props.saveOrStrike !== "basicSave") {
        dice = dice.concat(<DiceInput name="success" key={activityID + "success"} />);
    }
    if (props.saveOrStrike !== "strike") {
        dice = dice.concat(<DiceInput name="fail" key={activityID + "fail"} />);
    }
    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit fail" key={activityID + "crit fail"} />);
    }

    return dice;
}

function DiceInput(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + camelCase(props.name) + "Dice";
    return (
        <div>
            <label htmlFor={id}>On {startCase(props.name)}: </label>
            <input name={id} id={id} />
        </div>
    )
}