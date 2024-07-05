import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";

export default function Dice(props) {
    var dice = [];

    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit success" />);
    }
    if (props.saveOrStrike !== "basicSave") {
        dice = dice.concat(<DiceInput name="success" />);
    }
    if (props.saveOrStrike !== "strike") {
        dice = dice.concat(<DiceInput name="fail" />);
    }
    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit fail" />);
    }

    return dice;
}

function DiceInput(props) {
    var id = camelCase(props.name) + "Dice";
    return (
        <div>
            <label htmlFor={id}>On {startCase(props.name)}: </label>
            <input name={id} id={id} />
        </div>
    )
}