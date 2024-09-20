import startCase from "../../../util/startCase";
import ActionSymbol from "./actionSymbol";

export default function Abilities(props) {
    console.log("abilities");

    if (!props.abilities) {
        return;
    }

    var abilities = props.abilities.map(e => {
        if (e.actions === "reaction" || e.actions === "freeAction") {
            return <p key={e.id}><b>{startCase(e.name)}</b> <ActionSymbol num={e.actions} /><b>Trigger</b> {e.trigger} <b>Effect</b> {e.effect}</p>
        } else if (!e.actions) {
            return <p key={e.id}><b>{startCase(e.name)}</b> {e.effect}</p>
        } else {
            return <p key={e.id}><b>{startCase(e.name)}</b> <ActionSymbol num={e.actions} /> {e.effect}</p>
        }
    });

    return (<div>{abilities}</div>);
}