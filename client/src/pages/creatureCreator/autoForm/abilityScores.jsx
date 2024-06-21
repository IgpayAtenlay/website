import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import { updateAbilities } from "./updaters/updateAbilities";

export default function AbilityScores() {
    return (
        <span>
            <AbilityScore name="str" />
            ,{" "}
            <AbilityScore name="dex" />
            ,{" "}
            <AbilityScore name="con" />
            ,{" "}
            <AbilityScore name="wis" />
            ,{" "}
            <AbilityScore name="int" />
            ,{" "}
            <AbilityScore name="cha" />
        </span>
    );
}

function AbilityScore(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    
    function handleChange(e) {
        var scale = e.target.value;
        var abilities = creature.abilities;

        abilities = {
            ...abilities,
            [e.target.id]: {
                ...abilities[e.target.id],
                scale: scale
            }
        }

        abilities = updateAbilities(abilities, creature.level);

        setCreature(prevCreature => ({
            ...prevCreature,
            abilities: abilities
        }));
    }

    return (
        <span>
            <label htmlFor={props.name}><b>{startCase(props.name)} </b></label>
            <select id={props.name} value={creature.abilities[props.name].scale} onChange={handleChange}>
                <option value="auto">Auto</option>
                <option value="manual">Manual</option>
                <option value="extreme">Extreme</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
                <option value="terrible">Terrible</option>
            </select>
        </span>
    );
}