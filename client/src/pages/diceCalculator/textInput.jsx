import camelCase from "../../util/camelCase";
import { ActivityIDContext } from ".";
import { useContext } from "react";

export default function TextInput(props) {
    var activity = useContext(ActivityContext);
    var activityID = activity.id;
    var id = activityID + camelCase(props.name);
    return (
        <div>
            <label htmlFor={id}>{props.name}: </label>
            <input id={id} name={id} />
        </div>
    );
}