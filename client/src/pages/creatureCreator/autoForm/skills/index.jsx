import { useContext } from 'react';
import { CreatureContext } from "../../index";
import Name from "./name";
import Scale from "./scale";
import SortButton from './sortButton';
import AddButton from './addButton';

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = creature.skills.map(e => 
        <div class="skill" key={e.id}>
            <Name id={e.id} name={e.name} />
            <Scale id={e.id} scale={e.scale} />
        </div>
    );

    var names = creature.skills.map((e, index) => 
        <Name id={e.id} name={e.name} />
    );
    var scales = creature.skills.map(e => 
        <Scale id={e.id} scale={e.scale} />
    );

    return (
        <div>
            <p><b>Skills</b></p>
            <div class="skillWrapper" style={{gridTemplateRows: "1fr ".repeat(creature.skills.length)}}>
                {names}
                {scales}
            </div>
            <AddButton />
            <SortButton />
        </div>
    );
}