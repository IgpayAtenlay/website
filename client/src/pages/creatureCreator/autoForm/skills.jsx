import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import { skills } from "../variables";
import updateSkills from "./updaters/updateSkills";
import {v4} from "uuid";
import highestAbility from "./updaters/highestAbility";

export default function Skills(props) {
    var skill = props.skills.slice(0,-1).map(e => 
        <span key={e.id}>
            <Skill id={e.id} name={e.name} scale={e.scale}/>,{" "}
        </span>
    );
    var lastSkill = props.skills.slice(-1).map(e => 
        <Skill key={e.id} id={e.id} name={e.name} scale={e.scale}/>
    );

    return (
        <span>
            {skill}
            {lastSkill}
            <AddButton />
        </span>
    );
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

    function handleChangeLores(e) {
        var name = e.target.value.toLowerCase();
        var index = creature.skills.findIndex(a => a.id === e.target.id);

        if (name === "delete") {
            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.filter(a => a.id !== e.target.id)
            }));
        } else {
            name = name + " lore"

            setCreature(prevCreature => ({
                ...prevCreature,
                skills: prevCreature.skills.with(index, {
                    ...prevCreature.skills[index],
                    name: name
                })
            }))
        }
    }

    if (!props.name.includes("lore") && props.name in skills) {
        var skillOptions = Object.keys(skills).map(e => <option key={e} value={e}>{startCase(e)}</option>)
    
        return(
            <select id={props.id} value={props.name} onChange={handleChange}>
                {skillOptions}
                <option value="delete">Delete</option>
            </select>
        );
    } else {
        var name = props.name;
        if (name.includes(" lore")) {
            name = name.slice(0, -5);
        }

        return(
            <span>
                <input id={props.id} value={name} onChange={handleChangeLores} style={{width: (name.length * 4 / 9 + 1) + "em"}}/>
                {" "}Lore
            </span>
        );
    }
}

function Scale(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var scale = e.target.value;
        var index = creature.skills.findIndex(a => a.id === e.target.id);

        var skills = creature.skills.with(index, {
            ...creature.skills[index],
            scale: scale
        });

        skills = updateSkills(skills, creature.level, creature.abilities);
        
        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    return (
        <select id={props.id} value={props.scale} onChange={handleChange}>
            <option value="auto">Auto</option>
            <option value="manual">Manual</option>
            <option value="extreme">Extreme</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
            <option value="veryLow">Very Low</option>
        </select>
    );
}

function AddButton(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var highestAbilities = highestAbility(creature.abilities);

        var name = "lore"

        Object.entries(skills).forEach(([skill, ability]) => {
            if (skill !== "lore" && highestAbilities.includes(ability) && !creature.skills.some(e => e.name === skill)) {
                name = skill;
                return;
            }
        });

        if (name === "lore") {
            Object.keys(skills).forEach((skill) => {
                if (skill !== "lore" && !creature.skills.some(e => e.name === skill)) {
                    name = skill;
                    return;
                }
            });
        }
        
        var newSkill = {
            name: name,
            scale: "auto",
            modifier: 0,
            id: v4()
        }

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: updateSkills(creature.skills.concat(newSkill), creature.level, creature.abilities)
            }));
    }
    

    return <button onClick={handleChange}>+</button>;
}