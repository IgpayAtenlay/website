import startCase from "../../../util/startCase";

export default function Skills(props) {
    var skills = props.skills.slice(0,-1).map(e => 
        <span key={e.id}>{startCase(e.name)} +{e.modifier}, </span>
    );
    var lastSkill = props.skills.slice(-1).map(e => 
        <span key={e.id}>{startCase(e.name)} +{e.modifier}</span>
    );

    return (<span>{skills}{lastSkill}</span>);
}