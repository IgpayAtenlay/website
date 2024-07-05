import { useContext } from 'react';
import { CreatureContext } from "../../index";
import sortSkills from "../updaters/sortSkills";

export default function SortButton() {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange() {
        var skills = sortSkills(creature.skills);

        setCreature(prevCreature => ({
            ...prevCreature,
            skills: skills
        }));
    }

    return <button onClick={handleChange}>Sort</button>
}