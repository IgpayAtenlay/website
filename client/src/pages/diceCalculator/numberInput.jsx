import camelCase from "../../util/camelCase";
import { ActivityContext } from ".";
import { useContext } from "react";

export default function NumberInput(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + camelCase(props.name);
    return (
        <div>
            <label htmlFor={id}>{props.name}: </label>
            <input type="number" id={id} name={id} defaultValue={0} />
        </div>
    );
}