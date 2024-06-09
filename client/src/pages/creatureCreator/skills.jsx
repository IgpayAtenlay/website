import startCase from "../../util/startCase";

export default function Skills(props) {
    var skills = props.skills.slice(0,-1).map(e => 
        <span>{startCase(e.name)} +{e.value}, </span>
    );
    var lastSkill = props.skills.slice(-1).map(e => 
        <span>{startCase(e.name)} +{e.value}</span>
    );

    return (<span>{skills}{lastSkill}</span>);
}