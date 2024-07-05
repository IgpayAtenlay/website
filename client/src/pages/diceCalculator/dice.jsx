import camelCase from "../../util/camelCase";
import startCase from "../../util/startCase";

export default function Dice(props) {
    var dice = [<h2>Damage Dice</h2>];

    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit success" key="crit success" />);
    }
    if (props.saveOrStrike !== "basicSave") {
        dice = dice.concat(<DiceInput name="success" key="success" />);
    }
    if (props.saveOrStrike !== "strike") {
        dice = dice.concat(<DiceInput name="fail" key="fail" />);
    }
    if (props.saveOrStrike === "customDamage") {
        dice = dice.concat(<DiceInput name="crit fail" key="crit fail" />);
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