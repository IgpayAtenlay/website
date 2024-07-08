import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";
import { ActivityContext } from ".";
import { useContext } from "react";

export default function Reroll() {
    return (
        <div>
            <Checkbox name="crit success" />
            <Checkbox name="success" />
            <Checkbox name="fail" />
            <Checkbox name="crit fail" />
        </div>
    );
}

function Checkbox(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var name = camelCase(props.name) + "Reroll";
    var id = activityID + name;

    return(
        <div>
            <input 
                type="checkbox"
                name={name}
                id={id}
            />
            <label htmlFor={id}>Reroll {startCase(props.name)}</label>
        </div>
    );
}