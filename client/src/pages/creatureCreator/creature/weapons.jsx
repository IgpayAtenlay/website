import startCase from "../../../util/startCase";
import ActionSymbol from "../actionSymbol";
import List from "./list";

export default function Weapons(props) {
    var weapons = props.weapons.map(e => 
        <p key={e.id}>
            <b>{startCase(e.range)}</b> <ActionSymbol num="1" /> {e.name} +{e.modifier} (<List listItems={e.traits}/>), <b>Damage</b> {e.damageDice} {e.damageType}</p>
    );

    return (<div>{weapons}</div>);
}