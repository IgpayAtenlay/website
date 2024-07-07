import camelCase from "../../util/camelCase";
import { ActivityIDContext } from ".";
import { useContext } from "react";

export default function NumberInput(props) {
    var activityID = useContext(ActivityIDContext);
    var id = activityID + camelCase(props.name);
    return (
        <div>
            <label htmlFor={id}>{props.name}: </label>
            <input type="number" id={id} name={id} defaultValue={0} />
        </div>
    );
}