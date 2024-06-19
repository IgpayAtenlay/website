import startCase from "../../../util/startCase";

export default function MiscAbilities(props) {
    var other = props.other.map(e => 
        <p key={e.id}><b>{startCase(e.name)}</b> {e.description}</p>
    );

    return (<div>{other}</div>);
}