import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import { skillModifiers, skills } from "../variables";

export default function Skills(props) {
    var skill = props.skills.slice(0,-1).map(e => 
        <span>
            <Skill key={e.id} id={e.id} name={e.name} scale={e.scale}/>,{" "}
        </span>
    );
    var lastSkill = props.skills.slice(-1).map(e => 
        <Skill key={e.id} id={e.id} name={e.name} scale={e.scale}/>
    );

    return (<span>{skill}{lastSkill}</span>);
}

function Skill(props) {
    return (
        <span>
            <Name id={props.id} name={props.name} />
            {" "}
            <Scale id={props.id} scale={props.scale} />
        </span>
    );
}

function Name(props) {
    var skillOptions = Object.keys(skills).map(e => <option value={e}>{startCase(e)}</option>)
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var name = e.target.value.toLowerCase();
        var index = creature.skills.findIndex(a => a.id === e.target.id);
        
        if (name === "delete") {
            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.filter(a => a.id !== e.target.id)
            }));
        } else {
            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.with(index, {
                    ...prevCreature.skills[index],
                    name: name
                })
            }))
        }
    }

    if (props.name in skills) {
        return(
            <select id={props.id} value={props.name} onChange={handleChange}>
                {skillOptions}
                <option value="delete">Delete</option>
            </select>
        );
    } else {
        return(
            <input id={props.id} value={startCase(props.name)} onChange={handleChange} style={{width: (props.name.length * 4 / 9 + 1) + "em"}}/>
        );
    }
}

function Scale(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var scale = e.target.value;
        var index = creature.skills.findIndex(a => a.id === e.target.id);
        
        if (scale === "auto") {
            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.with(index, {
                    ...prevCreature.skills[index],
                    scale: scale
                })
            }))
        } else {
            var value = skillModifiers[scale][creature.level + 1];

            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.with(index, {
                    ...prevCreature.skills[index],
                    value: value,
                    scale: scale
                })
            }))
        }
    }

    return (
        <select id={props.id} value={props.scale} onChange={handleChange}>
            <option value="auto">Auto</option>
            <option value="extreme">Extreme</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
            <option value="veryLow">Very Low</option>
        </select>
    );
}
