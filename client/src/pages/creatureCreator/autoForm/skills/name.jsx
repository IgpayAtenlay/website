import startCase from "../../../../util/startCase";
import { allSkills } from "../../variables";
import { useContext } from 'react';
import { CreatureContext } from "../../index";
import sortSkills from "../updaters/sortSkills";
import updateSkills from "../updaters/updateSkills";

export default function Name(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChangeDropdownMenu(e) {
        var name = e.target.value.toLowerCase();
        var index = creature.skills.findIndex(a => a.id === e.target.id);

        var skills = creature.skills;

        // update name

        skills = skills.with(index, {
            ...skills[index],
            name: name
        })

        // sort skills

        skills = sortSkills(skills);

        // update skills

        skills = updateSkills(skills, creature.level, creature.abilities);

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    function handleChangeLores(e) {
        var name = e.target.value.toLowerCase();
        var index = creature.skills.findIndex(a => a.id === e.target.id);

        var skills = creature.skills;

        // don't sort skills on this one to avoid confusion mid-edit
        // no need to update skills since it will always stay a lore

        name = name + " lore"
        skills = skills.with(index, {
            ...skills[index],
            name: name
        })

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    if (!props.name.includes("lore") && props.name in allSkills) {

        // if skill is not a lore, have a dropdown menu

        var skillOptions = Object.keys(allSkills).map(e => <option key={e} value={e}>{startCase(e)}</option>)
    
        return(
            <select id={props.id} value={props.name} onChange={handleChangeDropdownMenu}>
                {skillOptions}
            </select>
        );
    } else {

        // if skill is a lore, have a text input box

        var name = props.name;
        if (name.includes(" lore")) {

            // take the word lore out of the skill name before displaying
            
            name = name.slice(0, -5);
        }

        return(
            <div class="lore">
                <input class="loreInput" id={props.id} value={name} onChange={handleChangeLores} />
                <p>&nbsp;Lore</p>
            </div>
        );
    }
}