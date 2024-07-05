import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";

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
    var id = camelCase(props.name) + "Reroll";
    return(
        <div>
            <input 
                type="checkbox"
                name={id}
                id={id}
            />
            <label htmlFor={id}>Reroll {startCase(props.name)}</label>
        </div>
    );
}