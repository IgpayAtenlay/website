import startCase from "../../../util/startCase";
import ActionSymbol from "./actionSymbol";
import List from "./list";

export default function Attacks(props) {
    console.log("attacks");

    if (!props.attacks) {
        return;
    }

    var attacks = props.attacks.map(e => 
        <p key={e.id}>
            <b>{startCase(e.range)}</b> <ActionSymbol num="1" /> {e.name} +{e.modifier}{e.traits.length > 0 && <List listItems={e.traits}/>}, <b>Damage</b> {e.damageDie} {e.damageType}
        </p>
    );

    return (<div>{attacks}</div>);
}